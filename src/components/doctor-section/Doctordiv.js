import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import './Doctordiv.css'

const Doctordiv = (props) => {
    // console.log(props);
    /* districturing the items */
    const{name,picture,salary,email,address,education,traning,skills,hostital}=props.doctor;
    const element = <FontAwesomeIcon icon={faStethoscope}  />
    
    return (
        
        
        <div>
            
            
            <div className="col ">
                <div className="card my-card">
                    <img className="img-fluid card-img-top my-img" src={picture} alt="doctorPicture" />    
                    <div className="card-body">
                        <h5><span>Name:</span> {name} </h5>
                        <h6><span>Salary : </span> ${salary}</h6>
                        
                        <p><span>Email: </span>{email}</p> <br />
                        <small><span>Address:</span> {address}</small>  
                        <p><span>Education: </span>{education} <br /><span>Training</span>{traning} <br /><span>Skill : </span>{skills}</p>      
                        <p><span>Hospital: </span>{hostital}</p>      
                        <button className="btn-add" 
                        onClick={()=>props.handelAdded(props.doctor)}> <p className="fs-5"><span className="Stethoscope">{element} </span> Appointment</p> </button> 
                    </div>    
                </div>                
            </div>
            
        </div>
    );
};

export default Doctordiv;