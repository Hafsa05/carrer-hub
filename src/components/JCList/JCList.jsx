import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import SingleList from '../SingleList/SingleList';

const JCList = () => {
    const [mylist,setMyList]=useState([])

    useEffect(()=>{
        fetch('/featurejob.json')
        .then(res=>res.json())
        .then(data =>setMyList(data))
    },[])
    console.log(mylist)
    return (
        <div>
            <h2>{list.length}</h2>
            <h2 className='text-4xl mt-12 mb-4'>Job Category List</h2>
            <p className='mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 gap-4 mb-16'>
                {
                    mylist?.map(card=> <SingleList key={card.id } card={card}></SingleList>)
                }
            </div>
        </div>
    );
};

export default JCList;