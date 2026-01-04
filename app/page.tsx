import HeroSection from "@/sections/hero-section";
import OurTeamSection from "@/sections/our-team";
import StatsSection from "@/sections/stats-section";
import FacebookPostsSection from "@/sections/facebook-posts-section";
import MembershipFormSection from "@/sections/membership-form-section";

export default function Page() {
    return (
        <main>
            <HeroSection />
            <FacebookPostsSection />
            <OurTeamSection />
            <MembershipFormSection />
        </main>
    );
}
