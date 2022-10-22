import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AccordionList from '../components/Dashboard/AccordionList';

const Dashboard = () => {
    // Calculate the percantege of progress = reached to goal
    const percentage = 66;

    return (
        <div className="mt-5">
            <div className="row d-flex justify-content-center">
                <div className="card col-3 text-center align-items-center">
                    <CircularProgressbar value={percentage} text={`${percentage}/100`} className="w-50 mt-5" />
                    
                </div>
                <div className="offset-1 col-7">
                    <span className="text-uppercase">Recent activity</span>
                    <hr/>
                    <AccordionList />
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard;