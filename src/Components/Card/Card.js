import React from 'react';

const Card = ({item, handleAddList}) => {
    const { img, name, information, Age, Time } =item;
   
    return (
        <div>
            <div class="card">
                <img src={img} alt="" className='w-100 p-2 rounded'/>
                <div className='card-body'>
                    <h5>{name}</h5>
                    <p>{information}</p>
                    <p>For Age : {Age}</p>
                    <p>Time Required : {Time}</p>
                    <button onClick={ () => handleAddList(item)} className='btn btn-primary w-100'>Add to List</button>
                </div>
            </div>
        </div>

    );
};

export default Card;