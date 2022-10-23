import { IUser } from "../../interfaces/IUser";
import users from "./database";
import UserItem from "./UserItem";

const UsersList = () => {
    // We could add dropdown to select the top people per - week/month/year
    return (
        <>
        {
            users
                .sort((a, b) => a.score > b.score ? -1 : 1)
                .map((data: IUser) => {
                    return <UserItem key={data.email} name={data.name} score={data.score}/>
                })
        }
        </>
    );
  };
  
  export default UsersList;