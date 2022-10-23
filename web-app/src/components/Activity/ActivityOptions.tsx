import { IActivity } from "../../interfaces/IActivity";
import activitiesData from "./activities_db";
import ActivityItem from "./ActivityItem";

export default function ActivityOptions () {
    return (
        <div>
            {
                activitiesData.map((data: IActivity) => {
                    return <ActivityItem key={data.id} applianceName={data.appliance_name} image={data.image}/>
                })
            }
        </div>
    )
}