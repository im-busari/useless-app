import { Pie } from "../components/Dashboard/ProgressBar";
import UsersList from "../components/Leaderboard/UsersList";

const Leaderboard = () => {
    return (
        <div className="mt-5">
            <div className="row d-flex justify-content-center">
                <div className="card col-3 text-center align-items-center">
                    <Pie percentage={72} colour="#A3BF56"/>
                    <p>Wow! 72% of our users have logged an activity today.</p>
                    <p className="mt-5"> What about you?</p>
                    
                    <hr />
                    <button type="button" style={{ backgroundColor: "#A3BF56", color: "white"}} className="font-weight-bold btn btn-lg btn-block w-100 mt-2 mb-3 b-green">Add activity</button>
                </div>
                <div className="offset-1 col-7">
                    <div className='mb-5'>
                        <span className="text-uppercase">Leaderboard</span>
                        <hr/>
                        <UsersList />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Leaderboard;