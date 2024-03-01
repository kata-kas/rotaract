import {sql} from "@vercel/postgres";
import {Subscriber} from "@/types/subscriber";
export function GetSubscribers() {
    return sql<Subscriber>`SELECT * FROM subscriber`;
}

export async function DeleteSubscriber(id: string) {
    "use server";
    return sql<Subscriber>`DELETE FROM subscriber WHERE id = ${id}`;
}
