import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
    // Calculate the percantege of progress = reached to goal
    const percentage = 66;

    return (
        <div className="mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-7">
                    <CircularProgressbar value={percentage} text={`${percentage}/100`} className="p-2" />;
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard;