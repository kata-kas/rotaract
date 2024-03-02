"use client";

import type Stripe from "stripe";
import React, {useState} from "react";
import StripeTestCards from "@/components/stripe-test-cards";
import {formatAmountForDisplay} from "@/lib/stripe-helpers";
import * as config from "@/lib/constants";
import {createCheckoutSession} from "@/actions/stripe";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

interface CheckoutFormProps {
    uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
}

const formSchema = z.object({
    customDonation: z.coerce.number().int().min(config.MIN_AMOUNT).max(config.MAX_AMOUNT),
});

export default function CheckoutForm(props: CheckoutFormProps): JSX.Element {
    const [loading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP)
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const formData = new FormData();
        formData.set("customDonation", values.customDonation.toString());
        formData.set("uiMode", props.uiMode);
        const {client_secret, url} = await createCheckoutSession(formData);

        window.location.assign(url as string);
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="customDonation"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Donation amount
                                </FormLabel>
                                <FormControl>
                                    <Input type="number"  {...field} />
                                </FormControl>
                                <FormDescription>
                                    {formatAmountForDisplay(config.MIN_AMOUNT, config.CURRENCY)} -{" "}
                                    {formatAmountForDisplay(config.MAX_AMOUNT, config.CURRENCY)}
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <StripeTestCards/>
                    <Button
                        className="w-full"
                        type="submit"
                        disabled={loading}
                    >
                        Donate {formatAmountForDisplay(form.watch("customDonation"), config.CURRENCY)}
                    </Button>
                </form>
            </Form>
        </>
    );
}
