import Link from "next/link"
import {getDataFromSession} from "@/actions/stripe";
import {parseUnixTimestamp} from "@/lib/utils";
import Confetti from "@/components/confetti";

type Props = {
    params: {};
    searchParams: {
        session_id: string;
    };
};

export default async function DonateResult(props: Props) {
    const searchParams = props.searchParams;
    const sessionId = searchParams.session_id;
    const session = await getDataFromSession(sessionId);
    if (!session) {
        return {
            notFound: true,
        };
    }

    const {amount_total, currency, customer_details, created} = session;
    const createdDate = parseUnixTimestamp(created);

    return (
        <div className="w-full py-12 prose mx-auto">
            <Confetti/>
            <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Thank You For Your Donation,  {customer_details?.name}!
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Your contribution will make a difference in our cause.
                    </p>
                </div>
                <div className="w-full max-w-sm space-y-4">
                    <div className="grid grid-cols-2 items-center gap-2 text-sm">
                        <div className="font-medium">Amount</div>
                        <div className="text-right">{currency}&nbsp;{amount_total ? amount_total / 100 : 0}</div>
                        <div className="font-medium">Date & Time</div>
                        <div className="text-right">{createdDate}</div>
                    </div>
                </div>
                <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="/"
                >
                    Back to Homepage
                </Link>
            </div>
        </div>
    )
}
