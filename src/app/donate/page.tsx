import type {Metadata} from "next";

import CheckoutForm from "@/components/checkout-form";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Donate | Rotaract Arad Cetate",
};

export default function DonatePage(): JSX.Element {
    return (
        <main className="flex flex-col items-center justify-center gap-10 px-40 py-12">
            <Card>
                <CardHeader>
                    <CardTitle>Donate</CardTitle>
                    <CardDescription>Donate to our project 💖</CardDescription>
                </CardHeader>
                <CardContent>
                    <CheckoutForm uiMode="hosted"/>
                </CardContent>
            </Card>
        </main>
    );
}
