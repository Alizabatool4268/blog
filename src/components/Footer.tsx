import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


function Footer() {
  return (
    <footer className='bg-black text-white mt-11'>
    <div className='grid grid-cols-4 grid-rows-1 msm:grid-rows-2 msm:grid-cols-2 ssm:grid-rows-4 ssm:grid-cols-1
    xsm:grid-rows-4 xsm:grid-cols-1'>
        <span className='sm:text-sm xsm:flex xsm:justify-center xsm:flex-col xsm:items-center ssm:flex ssm:justify-center ssm:items-center ssm:flex-col '>
            <h5 className='text-[35px] font-bold mt-3 text-blue-300'>Overview</h5>
            <p className='font-bold'>Contact Info</p>
            <p className=''>03118313166</p>
        </span>
        <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center ssm:flex ssm:justify-center ssm:items-center ssm:flex-col '>
            <h6 className='font-bold text-blue-300'>Catagories</h6>
            <ul className='sm:text-sm cursor-pointer'>
                <li>Languages</li>
                <li>Framesworks</li>
                <li>Libraries</li>
                <li>other</li>
            </ul>
        </span>
        <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center ssm:flex ssm:justify-center ssm:items-center ssm:flex-col'>
        <h6 className='font-bold text-blue-300'>Customer Care</h6>
            <ul className='sm:text-sm cursor-pointer'>
                <li>Account</li>
                <li>Discount cources</li>
                <li>live clases</li>
                <li>Try premium</li>
            </ul>
        </span>
        <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center ssm:flex ssm:justify-center ssm:items-center ssm:flex-col'>
        <h6 className='font-bold text-blue-300'>Further Info</h6>
            <ul className='sm:text-sm cursor-pointer'>
                <li>Blog</li>
                <li>Browse paid course</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>be a blogger</li>
            </ul>
        </span>
    </div>
    <div className='bg-black flex justify-around items-center xsm:flex-col border-t-[1px] border-solid border-white'>
        <p className=''>© All Rights Reserved by Aliza</p>
         <span className=' flex justify-center items-center gap-1 text-white'>
            <FaFacebook />
            <FaTwitterSquare />
            <FaInstagramSquare />
         </span>
    </div>
</footer>
  )
}

export default Footer