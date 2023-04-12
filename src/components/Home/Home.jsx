import React, { useState } from 'react';
import Background from '../Background/Background';
import JobList from '../JobList/JobList';
import SingleCard from '../SingleCard/SingleCard';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import JCList from '../JCList/JCList';

const Home = () => {
    const datas = useLoaderData();
    // console.log(datas);

    const [data, setData] = useState([]);

    return (
        <div>
            <Background></Background>
            <JCList></JCList>
            <h2 className='text-4xl'>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 mb-10'>
                {
                    datas.map(data => <JobList key={data.id} data={data}></JobList>)
                }
            </div>
            
            <button className="mt-10 w-48 h-16 bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-lg text-white font-semibold ">See All Jobs</button>
        </div>
    );
};

export default Home;