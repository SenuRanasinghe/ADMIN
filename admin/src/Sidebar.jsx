import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsPeopleFill,BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { MdOutlineCardGiftcard } from "react-icons/md";
 import { ImScissors } from "react-icons/im";
 import { IoIosLogOut } from "react-icons/io";
 import { BsBoxSeam } from "react-icons/bs";
 import { MdOutlineEditCalendar } from "react-icons/md";
 import { FaRegListAlt } from "react-icons/fa";
 import LOGO1 from "./Images/LOGO1.png";
 import { FaUser } from "react-icons/fa";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={LOGO1} alt="Logo" style={{ width: '120px', height: 'auto', marginRight: '60px', marginLeft: '30px'}}/>  
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaUser className='icon'/> User Accounts
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Employee Profiles
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdOutlineEditCalendar className='icon'/> Appointments
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <ImScissors className='icon'/> Services
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBoxSeam className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaRegListAlt className='icon'/> Courses
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdOutlineCardGiftcard className='icon'/> Gift Voucher
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Feedbacks
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoIosLogOut className='icon'/> Log Out
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar