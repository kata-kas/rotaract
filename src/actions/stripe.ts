"use server";

import type {Stripe} from "stripe";

import {headers} from "next/headers";

import {CURRENCY} from "@/lib/constants";
import {formatAmountForStripe} from "@/lib/stripe-helpers";
import {stripe} from "@/lib/stripe";

export async function createCheckoutSession(
    data: FormData,
): Promise<{ client_secret: string | null; url: string | null }> {
    const ui_mode = data.get(
        "uiMode",
    ) as Stripe.Checkout.SessionCreateParams.UiMode;

    const origin: string = headers().get("origin") as string;

    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create({
            mode: "payment",
            submit_type: "donate",
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: CURRENCY,
                        product_data: {
                            name: "Custom amount donation",
                        },
                        unit_amount: formatAmountForStripe(
                            Number(data.get("customDonation") as string),
                            CURRENCY,
                        ),
                    },
                },
            ],
            success_url: `${origin}/donate/result?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/donate`,
            ui_mode,
        });

    return {
        client_secret: checkoutSession.client_secret,
        url: checkoutSession.url,
    };
}

export async function createPaymentIntent(
    data: FormData,
): Promise<{ client_secret: string }> {
    const paymentIntent: Stripe.PaymentIntent =
        await stripe.paymentIntents.create({
            amount: formatAmountForStripe(
                Number(data.get("customDonation") as string),
                CURRENCY,
            ),
            automatic_payment_methods: { enabled: true },
            currency: CURRENCY,
        });

    return { client_secret: paymentIntent.client_secret as string };
}

export async function getDataFromSession(
    sessionId: string,
): Promise<Stripe.Checkout.Session | null> {
    return await stripe.checkout.sessions.retrieve(sessionId);
}
