import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { HandshakeIcon } from "lucide-react";
import Image from "next/image";

export default function OurTeamSection() {
    return (
        <section className="border-b border-border px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="pt-20 pb-32 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-border">
                <SectionTitle
                    icon={HandshakeIcon}
                    title="Echipa Noastră"
                    subtitle="O echipă pasionată de tineri lideri dedicați construirii unei comunități mai bune prin acțiune și serviciu."
                />
                <AnimatedContent className="mt-12 w-full max-w-4xl">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/assets/team/team.jpg"
                            alt="Echipa Rotaract Arad Cetate"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        />
                    </div>
                </AnimatedContent>
            </div>
        </section>
    )
}