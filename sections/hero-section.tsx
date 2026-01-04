import AnimatedContent from "@/components/animated-content";
import CustomIcon from "@/components/custom-icon";
import MarqueeRow from "@/components/marquee-row";
import { SparkleIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    const row1Images = [
        '/assets/hero/195485090_3951184061630886_439237748338509337_n.jpg',
        '/assets/hero/476836808_9047985295284045_9070979609789526558_n.jpg',
        '/assets/hero/481007708_9136248713124369_5590896417032862498_n.jpg',
        '/assets/hero/481259904_9166547390094501_3828743352635285824_n.jpg',
        '/assets/hero/482007617_9203851696364070_3948594335438612926_n.jpg',
        '/assets/hero/482320303_9218725954876644_9066112508967801970_n.jpg',
    ];

    const row2Images = [
        '/assets/hero/482244978_9227264067356166_1767934184692704015_n.jpg',
        '/assets/hero/483566473_9233183026764270_4012701137245709529_n.jpg',
        '/assets/hero/483577551_9233199483429291_844019074181941249_n.jpg',
        '/assets/hero/487965666_9349625998453305_6537636272860446976_n.jpg',
        '/assets/hero/476801243_1036011811902209_9705946653796803_n.jpg',
        '/assets/hero/479923131_1039634398206617_9128829039015414709_n.jpg',
    ];

    const row3Images = [
        '/assets/hero/480464786_1042912417878815_5286848107331232972_n.jpg',
        '/assets/hero/480747841_1044370777732979_6926561186668269300_n.jpg',
        '/assets/hero/483595059_1057115053125218_7211416133818401919_n.jpg',
        '/assets/hero/486173078_1067380662098657_1040008678654383915_n.jpg',
        '/assets/hero/486577408_1070429231793800_7697888173570931952_n.jpg',
        '/assets/hero/483489974_18288045049216379_8200931805912901494_n.jpg',
    ];

    return (
        <section className="relative px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
            <div className="absolute inset-0 z-0 flex flex-col justify-center gap-4 py-8">
                <MarqueeRow images={row1Images} height="h-[200px]" speed={30} />
                <MarqueeRow images={row2Images} height="h-[250px]" speed={25} reverse />
                <MarqueeRow images={row3Images} height="h-[200px]" speed={35} />
            </div>

            <div className="absolute inset-0 z-10 bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center" />

            <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center justify-center h-[80vh]">
                {/*<AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-bg/90 backdrop-blur p-1 rounded-full">*/}
                {/*    <div className="flex items-center -space-x-3">*/}
                {/*        <img className="size-7 rounded-full border-2 border-bg"*/}
                {/*            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"*/}
                {/*            alt="userImage1" />*/}
                {/*        <img className="size-7 rounded-full border-2 border-bg"*/}
                {/*            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"*/}
                {/*            alt="userImage2" />*/}
                {/*    </div>*/}
                {/*    <span>60K+</span>*/}
                {/*    <div className="h-5 w-px mx-1 bg-border-dark rounded-full" />*/}
                {/*    <span>Happy users worldwide</span>*/}
                {/*    <div className="h-5 w-px mx-1 bg-border-dark rounded-full" />*/}
                {/*    <div className="flex items-center gap-1 pr-3">*/}
                {/*        <StarIcon className="size-4.5 fill-brand stroke-brand" />*/}
                {/*        <span>4.9</span>*/}
                {/*    </div>*/}
                {/*</AnimatedContent>*/}
                <AnimatedContent distance={30} delay={0.1} className="relative">
                    <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-2xl text-white drop-shadow-lg">
                        Rotaract Arad Cetate
                    </h1>
                    <div className="absolute -top-5 right-13 hidden md:block">
                        <CustomIcon icon={SparkleIcon} dir="right" />
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={30} delay={0.2}>
                    <p className="text-center text-base/7 text-white/90 max-w-lg mt-4 drop-shadow-md">
                        Construim comunități prin acțiune și leadership tânăr
                    </p>
                </AnimatedContent>
                {/*<AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-6 w-full md:w-auto">*/}
                {/*    <Link href="/" className="py-3 md:py-2.5 w-full md:w-auto px-8 border border-primary-200 bg-linear-to-tl from-primary-600 to-brand text-white text-center rounded-full shadow-lg hover:shadow-xl transition-all">*/}
                {/*        Get Started*/}
                {/*    </Link>*/}
                {/*    <Link href="/" className="relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-bg text-text font-medium text-center border border-bg rounded-full shadow-lg hover:shadow-xl transition-all">*/}
                {/*        Watch Demo*/}
                {/*        <AnimatedContent direction="horizontal" className="absolute size-8 pointer-events-none right-0 top-full -translate-y-1/2">*/}
                {/*            <Image*/}
                {/*                src="/assets/mouse-arrow.svg"*/}
                {/*                alt="mouse-arrow"*/}
                {/*                width={24}*/}
                {/*                height={24}*/}
                {/*            />*/}
                {/*        </AnimatedContent>*/}
                {/*    </Link>*/}
                {/*</AnimatedContent>*/}
            </div>
        </section>
    );
}
