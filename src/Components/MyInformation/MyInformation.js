import React, { useEffect, useState } from 'react';
import './MyInformation.css'
import pic from '../../images/IMG_20190724_114002.JPG';
import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer, toast } from 'react-toastify';

const MyInformation = ({ activity }) => {

    const notify = () => toast("Wow so easy!");

    const [breakTime, setBreakTime] = useState([0]);

    function handleBreakTime(breakTimes) {
        setBreakTime(breakTimes);
        localStorage.setItem('time', JSON.stringify(breakTimes))

    }

    useEffect(() => {
        const timeCount = JSON.parse(localStorage.getItem('time'));
        if(timeCount){
            localStorage.setItem('time', JSON.parse(timeCount))

        }
        setBreakTime(timeCount)
    }, []);

    let totalTime = 0;
    for (const time of activity) {
        totalTime = totalTime + time.Time;
    }
    return (
        <div className='activites container shadow-lg p-4'>
            <div className="top d-flex gap-2">
                <img src={pic} alt="" className='About' />
                <div className="top-info">
                    <h5>Swapon Kumar</h5>
                    <p>Dhaka Bangladesh</p>
                </div>
            </div>
            <div className="body-frame">
                <div className="row">
                    <div className="col">
                        <h4>65kg</h4>
                        <p>Weight</p>
                    </div>
                    <div className="col">
                        <h4>5.8</h4>
                        <p>Height</p>
                    </div>
                    <div className="col">
                        <h5>22Year</h5>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <h5 className='mt-5'>Add a Break</h5>
            <div className="brak-info">
                <button onClick={() => handleBreakTime(10)}>10s</button>
                <button onClick={() => handleBreakTime(20)} className='bg-primary'>20s</button>
                <button onClick={() => handleBreakTime(30)}>30s</button>
                <button onClick={() => handleBreakTime(40)}>40s</button>
                <button onClick={() => handleBreakTime(50)}>50s</button>

            </div>
            <h5 className='mt-5'>Exercise Details:</h5>
            <div className="exercise d-flex gap-5 my-2">
                <p className='fw-bold'>Exercise Time:</p>
                <p>{totalTime}s</p>
            </div>
            <div className="break d-flex gap-5 mb-3">
                <p className='fw-bold'>Brak Time : </p>
                <p>{breakTime}s</p>
            </div>
            <button onClick={notify} className='btn btn-primary w-100 mb-5'>Activity Complited</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyInformation;