import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Inputfeild from '../InputtextAndBtn/inputfeild';
import SearchIcon from '@mui/icons-material/Search';

const ShortNav = (props) => {
    const {items,searchFeild} = props
    return (
        <div className='m-20 flex-row-around'>
             <div className={searchFeild? "lg:w-7/12 w-7/12":'w-full'}>
                <ul className='main-nav-menu flex-row-center-between'>
                    {
                        items.map((ele,ind)=>{
                            return <li className={`text-[1.2rem] ${ele.dropDown ? 'relative group' : ''}`}>
                                        <a href='home.html'>{ele.Title}{ele.dropDown?<ArrowDropDownIcon/>:""}</a>
                                        {
                                            ele.dropDown ?  <ul className='main-nav-dropdown-menu flex-coloum-center '>
                                                                {
                                                                ele.dropDownItem.map((ele)=>{
                                                                           return <li>
                                                                                <a href='home.html'>{ele}</a>
                                                                            </li>
                                                                     })
                                                                }
                                                            </ul>
                                                            : ""
                                        }
                                    </li>
                        })
                    }
                </ul>
            </div>
            {
                searchFeild?<div className='ml-40 mt-[-1rem] lg:w-5/12 w-5/12'>
                                <Inputfeild classes="w-full" label="Search">
                                    <SearchIcon/>
                                </Inputfeild>
                        </div> :""
            }
        </div>
    );
}

export default ShortNav;
