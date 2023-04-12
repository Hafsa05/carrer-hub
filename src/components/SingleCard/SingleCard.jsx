import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faCalendar, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData, useParams } from 'react-router-dom';

const SingleCard = () => {
    const {loadId}=useParams();
    const loadsData=useLoaderData();
    console.log(loadsData)
    console.log(loadId);

    const [fetchData,setFetchData]=useState([]);

    useEffect(()=>{
        const loadData=loadsData.find(job=>job.id==loadId);
        setFetchData(loadData)
    },[])
    
    return (
        <div>
            <h2 className='text-2xl font-semibold text-black mt-4 '>Job Details</h2>
            <div className='flex justify-between mt-36'>
            <div className='text-left'>
                <p className='mb-10'><span className='text-black font-semibold'>Job Description:</span>{fetchData.jobDescription}</p>
                <p className='mb-10'><span className='text-black font-semibold'>Job Responsibility:</span> {fetchData.jobResponsibility}</p>
                <p className='mb-10'><span className='text-black font-semibold'>Educational Requirements:</span> <br />{fetchData.educationalRequirement}</p>
                <p className='mb-10'><span className='text-black font-semibold'>Experiences:</span> <br /> {fetchData.experience}</p>
            </div>
            <div className='text-left bg-purple-50 p-10'>
                <div className='mb-8'>
                <h4 className='text-2xl font-semibold text-black mb-4 '>Job Details</h4>
                <hr />
                <h3 className='mt-4 mb-2'><FontAwesomeIcon icon={faCircleDollarToSlot} /> <span className='text-[#474747] text-xl'>Salary :</span> {fetchData.salary}</h3>
                <h3 className='mb-4'><FontAwesomeIcon icon={faCalendar} /> <span className='text-[#474747] text-xl'>Job Title :</span>  {fetchData.jobTitle}</h3>

                <h4 className='text-2xl font-semibold text-black mb-4 '>Contact Information</h4>
                <hr />
                <h3 className='mt-4 mb-2'><FontAwesomeIcon icon={faPhone} /> <span className='text-[#474747] text-xl'>Phone :</span>  {fetchData.phone}</h3>
                <h3 className='mb-2'><FontAwesomeIcon icon={faMailBulk} /> <span className='text-[#474747] text-xl'>Email :</span>{fetchData.email}</h3>
                <h3 className='mb-4'><FontAwesomeIcon icon={faMailBulk} /> <span className='text-[#474747] text-xl'>Address :</span>  {fetchData.address}</h3>
                </div>
                <button className="mt-10 w-48 h-16 bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-lg text-white font-semibold ">Apply Now</button>
            </div>
        </div>
        </div>
        
    );
};

export default SingleCard;