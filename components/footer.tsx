import {InstagramIcon, LinkedinIcon, LucideFacebook, TwitterIcon} from "lucide-react";
import Image from "next/image";
import AnimatedContent from "./animated-content";

export default function Footer() {
    return (
        <footer className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="border-x border-border px-4 md:px-12 max-w-7xl mx-auto pt-40">
                <div className="flex flex-col md:flex-row items-start justify-between relative p-8 md:p-12 overflow-hidden pb-32 md:pb-42 bg-linear-to-t from-primary-50 to-brand-light rounded-t-2xl">
                    <Image
                        src="/assets/logo-white.svg"
                        alt="Logo"
                        width={135}
                        height={35}
                        className="h-62 w-auto absolute -bottom-18 select-none pointer-events-none"
                    />
                    <AnimatedContent distance={40} className="max-w-72">
                        <Image
                            src="/assets/logo-white.svg"
                            alt="Logo"
                            width={135}
                            height={35}
                            className="h-9"
                        />
                        <p className="text-text-muted mt-4 pb-6">Service Above Self</p>
                    </AnimatedContent>
                    <div>
                        <p className="uppercase font-semibold text-brand-dark text-base">Social</p>
                        <AnimatedContent className="flex flex-col mt-6 gap-3">
                            {/*<a href="https://prebuiltui.com?ref=buildify" className="flex items-center gap-2 text-brand">*/}
                            {/*    <TwitterIcon size={20} />*/}
                            {/*    <p>Twitter</p>*/}
                            {/*</a>*/}
                            {/*<a href="https://prebuiltui.com?ref=buildify" className="flex items-center gap-2 text-brand">*/}
                            {/*    <LinkedinIcon size={20} />*/}
                            {/*    <p>Linkedin</p>*/}
                            {/*</a>*/}
                            <a href="https://www.facebook.com/RotaractCetateArad" className="flex items-center gap-2 text-brand">
                                <LucideFacebook size={20} />
                                <p>Facebook</p>
                            </a>
                            <a href="https://www.instagram.com/rotaractaradcetate" className="flex items-center gap-2 text-brand">
                                <InstagramIcon size={20} />
                                <p>Instagram</p>
                            </a>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </footer>
    );
}
