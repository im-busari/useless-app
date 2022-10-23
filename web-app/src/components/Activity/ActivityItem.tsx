export default function ActivityItem (props: { applianceName: string, image: string}) {
    const {applianceName, image } = props;

    return (
        <div> {applianceName} </div>
    )
}

