import React from 'react'

const OrganizerBlock = ({ data }) => (
    <div className="card organizer-card" style={{width: '10rem', margin: "1rem"}}>
        <img src={require(`../images/${data.image}`)} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{data.name} </h5>
            <p> {data.committee} </p>
        </div>
    </div>

)

export default OrganizerBlock