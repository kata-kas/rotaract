export default function StripeTestCards(): JSX.Element {
    return (
        <div className="p-5 rounded-lg my-5">
            <span>
                Use any of the{" "}
                <a
                    href="https://stripe.com/docs/testing#cards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    Stripe test cards
                </a>
            </span>
            <span>
                for this demo, e.g., <br/>
            </span>
            <span className="text-lg font-bold">
                4242<span className="mx-1"></span>4242<span className="mx-1"></span>4242<span className="mx-1"></span>4242
            </span>
        </div>
    );
}
