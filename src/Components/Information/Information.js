import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import logo from '../../images/logo.webp'
import './Informaion.css'
import MyInformation from '../MyInformation/MyInformation';

const Information = () => {
    const [cards, setCards] = useState([]);
    const [activity, setActivity] = useState([]);

    useEffect( () => {
     fetch('Package.json')
     .then (res => res.json())
     .then (data => setCards(data))
    }, []);

    const handleAddList = (item) => {
        const newActivity = [...activity, item];
        setActivity(newActivity);

    }

    return (
        <div className='container'>
            <div className="header d-flex m-3 align-items-center gap-2">
                <img src={logo} alt="" />
                <h3>Body-Fitness-Activity</h3>
            </div>
            <h4 className='fw-bold'>Selected Daily Exercise :</h4>
            <div className="row">
                <div className="information col-lg-9 ">    
                    <div className="gymList">
                    {
                        cards.map(card => <Card key={card.id} item={card} handleAddList={handleAddList} ></Card> )
                    }
                    </div>
                </div>
                
                <div className="activity col-lg-3">
                    <MyInformation  activity={activity}></MyInformation>
                </div>
            </div>
        </div>
    );
};

export default Information;