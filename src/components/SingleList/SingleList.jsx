import React from 'react';

const SingleList = ({card}) => {
    const{jobTitle, jobAvailable,bgImage}=card;
    return (
        <div>
            <div className="card w-96 bg-purple-50 shadow-xl">
                <figure><img src={bgImage} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{jobTitle}</h2>
                    <p>{jobAvailable}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleList;