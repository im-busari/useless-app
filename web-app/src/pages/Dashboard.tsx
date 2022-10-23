import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AccordionList from '../components/Dashboard/AccordionList';
import RankIcon from "../assets/images/podium.png";
import TokenIcon from "../assets/images/token.png";
import GoalIcon from "../assets/images/goal.png";
import { Pie } from '../components/Dashboard/ProgressBar';
import { CarbonChart } from '../components/Dashboard/CarbonChart';

const Dashboard = () => {
    // Calculate the percantege of progress = reached to goal
    const percentage = 66;

    return (
        <div className="mt-5">
            <div className="row d-flex justify-content-center">
                <div className="card col-3 text-center align-items-center">
                    <Pie percentage={20} colour="#A3BF56"/>
                    
                    <div className="d-flex justify-content-between bg-light w-100 my-2">
                        <img src={RankIcon} alt="rank" className='col-2 p-2'/>
                        <h5 className='align-self-center p-2'>24</h5>
                    </div>
                    <div className="d-flex justify-content-between bg-light w-100 my-2">
                        <img src={TokenIcon} alt="Points" className='col-2 p-2'/>
                        <h5 className='align-self-center p-2'>156</h5>
                    </div>
                    <div className="d-flex justify-content-between bg-light w-100 my-2">
                        <img src={GoalIcon} alt="Goal" className='col-2 p-2'/>
                        <h5 className='align-self-center p-2'>Weekly</h5>
                        <h5 className='align-self-center p-2'>12/50</h5>
                    </div>
                    <hr />
                    <button type="button" style={{ backgroundColor: "#A3BF56", color: "white"}} className="font-weight-bold btn btn-lg btn-block w-100 mt-5 mb-3 b-green">Carbon calculator</button>
                </div>
                <div className="offset-1 col-7">
                    <div className='mb-5'>
                        <span className="text-uppercase">Carbon Analysis</span>
                        <hr/>
                        <CarbonChart />
                    </div>

                    <div>
                        <span className="text-uppercase">Recent activity</span>
                        <hr/>
                        <AccordionList />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard;