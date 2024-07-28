import React from 'react';
import { RiHome7Line } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiIgloo } from 'react-icons/gi';
import { IoAccessibility } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const Sidebar=()=>{
    return (
        <>
        <div className='top-0 left-0 fixed h-screen w-15 flex flex-col bg-white dark:bg-gray-900 shadow-lg'>
            <Link to='/'><SideIcon icon={<RiHome7Line/>}/></Link>
            <Divider/>
            <Link to='/dome'><SideIcon1 icon={<GiIgloo/>}/></Link>
            <Link to='/costume'><SideIcon2 icon={<IoAccessibility/>}/></Link>
            <Divider/>
            <Link to='/contact'><SideIcon3 icon={<FaRegUserCircle/>}/></Link>
        </div>
        
        </>
    );
};

const SideIcon = ({icon, text='Home'}) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

const SideIcon1 = ({icon, text='Dome'}) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

const SideIcon2 = ({icon, text='Costume'}) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

const SideIcon3 = ({icon, text='Contact'}) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

const Divider = () => <hr className='sidebar-hr'/>

export default Sidebar;