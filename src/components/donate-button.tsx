import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function DonateButton() {
    return <Button asChild>
        <Link href={"/donate"}>Donate</Link>
    </Button>
}
