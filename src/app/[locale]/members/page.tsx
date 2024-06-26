import {DeleteSubscriber, GetSubscribers} from "@/lib/data/subscribers";
import {SubscribersTable} from "@/components/subscribers-table";

export default async function Members() {
    const {rows} = await GetSubscribers();

    return <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold">Subscribers</h1>
        {rows.length > 0 ? <SubscribersTable tableData={rows} deleteSubscriber={DeleteSubscriber}/> : <p>No subscribers found</p>}
    </div>;
}
