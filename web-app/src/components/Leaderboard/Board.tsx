import { Leaderboard } from './database';
import User from "./User";

export default function Board () {
    return (
        <div>
            <User Leaderboard={Leaderboard}></User>
        </div>
    )
}