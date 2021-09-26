import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Cart from '../cart/Cart';
import Doctordiv from '../doctor-section/Doctordiv';

import './Medicalteam.css'

const Medicalteam = () => {
    const[doctor,setdoctor]=useState([])    /* for first section */
    const[card,setCard]=useState([])        /* for second section */
    useEffect(()=>{
        fetch ('./medicaldata.json')
        .then(res=>res.json())
        .then(data=>setdoctor(data))
    },[])

    

    const handelAdded=(doctor)=>{
        const newCard=[...card,doctor];
        setCard(newCard)
    }

    const element = <FontAwesomeIcon icon={ faSearch} />
   
    
    return (
        <div className="container body-container">    {/* parent section or main body */}
            <input type="text" className="search-box " placeholder="search your needed doctor first"/>
            <button className=" btn"><span className="search">{element}</span> search</button>
            <div>     {/*parent of 2 blog  */}
                <div className="row"> {/* 9times here */}
                    <div className="col-md-9">
                    <div className= "row row-cols-1 row-cols-md-3 g-2">
                    {
                        doctor.map(doctor=><Doctordiv  
                        key={doctor._id}
                        doctor={doctor}
                        handelAdded={handelAdded}

                        ></Doctordiv>)
                    }
                    </div>
                   
                    </div>
                    
                   
                      
                    <div className="col-md-3">  {/* 3times here */}
                    {
                        <Cart card={card}></Cart>
                        
                    }
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medicalteam;