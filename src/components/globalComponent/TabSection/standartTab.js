import React,{useState,useEffect,useRef} from 'react';
import PricingStandard from '../../pageComponent/pricing/pricingStandard';



const StandartTab = (props) => {
    const {List,children} = props;
    const listItemRefs = useRef([])
    const  [currentItem ,setCurrentItem] = useState(0);
    useEffect(() => {
        listItemRefs.current.forEach((ele,ind)=>{
            ele.addEventListener("click",event=>{
                 event.srcElement.classList.add("!border-primary-blue");
                 setCurrentItem(ind);
                listItemRefs.current.forEach((e,i)=>{
                    if(ind!==i) e.classList.remove("!border-primary-blue")
                })
            })
        })
    } );

    return (
        <div className='container my-20 primaryTabContainer' id='standardTab'>
            <div className='flex-coloum-center items-start'>
                <div className='primaryTabList w-full my-10' id='standardTabLeft'>
                        <ul className='flex-row-center'>
                            {
                                List.map((ele,ind)=>{
                                    return <li
                                         href={`#content-${ind}`} 
                                        ref={el => listItemRefs.current[ind] = el}
                                        id={`list-${ind}`} 
                                        className={`border-2 mx-5 rounded-3xl w-full ${ind===0 ? "!border-primary-blue": ""}`}
                                    >
                                        <PricingStandard
                                            bg={`bg-${ele.type}`}
                                            heading={ele.plan}
                                            pricing={ele.price}
                                            paragraph={ele.description}
                                        />
                                    </li>
                                })
                            }
                        </ul>
                </div>
                <div className='w-full my-20 primaryTabContent relative' id='standardTabRight'>
                            {children[currentItem]}
                </div>
            </div>
        </div>
    );
}

export default StandartTab;
