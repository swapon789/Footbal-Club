import React, { useState } from 'react';
import './MyInformation.css'
import pic from '../../images/IMG_20190724_114002.JPG'

const MyInformation = ({ activity }) => {


    const [breakTime, setBreakTime] = useState([]);

    function handleBreakTime(breakTime) {
        setBreakTime(breakTime);

    }

    let totalTime = 0;
    for (const time of activity) {
        totalTime = totalTime + time.Time;
    }
    return (
        <div className='activites container shadow-lg p-4'>
            
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
            <button className='btn btn-primary w-100 mb-5'>Activity Complited</button>
        </div>
    );
};

export default MyInformation;