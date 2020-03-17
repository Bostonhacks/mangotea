import React from 'react'

const OrganizerBlock = ({ data }) => (
    <div className="organizerBlock-container">
        <div className="organizerBlock-content">
            <div className="organizer-headshot-div">
                <figure className="organizer">
                    <img src={require(`../images/${data.image}`)} alt="profile" className="organizer-image" />
                </figure>
            </div>
            <div className="organizer-info">
                <p> {data.name} </p>
                <p> {data.committee} </p>
            </div>
        </div>
    </div>
)

export default OrganizerBlock