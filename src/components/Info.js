import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Info = (props) => {
    return(
        <div>
            <h3> {props.title} </h3>
            <p>{props.prizes}</p>
            <h5>{props.attendees}</h5>
            <p>{props.sponsors}</p>
            <p>{props.organizers}</p>
        </div>          
    );
}


export default Info;