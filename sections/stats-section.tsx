import CountUp from "@/components/count-number";

export default function StatsSection() {
    return (
        <section className="border-y border-border py-10 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h3 className="text-4xl font-semibold font-urbanist">
                        <CountUp from={0} to={3} />x
                    </h3>
                    <p className="text-text-muted">Faster AI agent development</p>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                    <h3 className="text-4xl font-semibold font-urbanist">
                        <CountUp from={0} to={60} />%
                    </h3>
                    <p className="text-text-muted">Reduction in manual workflows</p>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                    <h3 className="text-4xl font-semibold font-urbanist">
                        <CountUp from={0} to={99.9} />%
                    </h3>
                    <p className="text-text-muted">Reliable agent execution uptime</p>
                </div>
            </div>
        </section>
    )
}