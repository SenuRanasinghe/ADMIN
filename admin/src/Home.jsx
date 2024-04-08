import React from 'react'
import 
{ BsPeopleFill,BsListCheck,BsMenuButtonWideFill}
 from 'react-icons/bs'
 import { MdOutlineCardGiftcard } from "react-icons/md";
 import { ImScissors } from "react-icons/im";
 import { BsBoxSeam } from "react-icons/bs";
 import { MdOutlineEditCalendar } from "react-icons/md";
 import { FaRegListAlt } from "react-icons/fa";
 import { FaUser } from "react-icons/fa";

function Home() {
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>APPOINTMENTS</h3>
                    <MdOutlineEditCalendar className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>INVENTORY</h3>
                    <BsBoxSeam className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REGISTERED CUSTOMERS</h3>
                    <FaUser className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
        </div>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COURSES</h3>
                    <FaRegListAlt className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>FEEDBACKS</h3>
                    <BsMenuButtonWideFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>EMPLOYEES</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
        </div>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SERVICES</h3>
                    <ImScissors className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>GIFT VOUCHERS</h3>
                    <MdOutlineCardGiftcard className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
        </div>
    </main>
  )
}

export default Home
