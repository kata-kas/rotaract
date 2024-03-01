import {sql} from "@vercel/postgres";
import {Subscriber} from "@/types/subscriber";
export function GetSubscribers() {
    return sql<Subscriber>`SELECT * FROM subscriber`;
}
