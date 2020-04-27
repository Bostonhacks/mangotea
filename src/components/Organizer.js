import React from 'react'

const OrganizerBlock = ({ data }) => (
    <div class="card" style={{width: '10rem', margin: "1rem"}}>
        <img src={require(`../images/${data.image}`)} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{data.name} </h5>
            <p> {data.committee} </p>
        </div>
    </div>

)

export default OrganizerBlock