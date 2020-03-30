import React from 'react'
import OrangizerBlock from '../components/OrganizerBlock'

import data from '../Organizers/Organizer.json'

import '../styles/Organizer.css'

const OrganizerList = () => (
    <div>
        <div>
            <h1 className="committee-header"> Director </h1>
            <div className="organizer-list-container">
                { data.director.map((director, indx) => (
                    <OrangizerBlock data={director} key={indx} />
                ))}
            </div>
        </div>
        <div>
            <h1 className="committee-header"> Logistics </h1>
            <div className="organizer-list-container">
                { data.logistics.map((logistics, indx) => (
                    <OrangizerBlock data={logistics} key={indx} />
                ))}
            </div>
        </div>
        <div>
            <h1 className="committee-header"> Marketing </h1>
            <div className="organizer-list-container">
                { data.marketing.map((marketing, indx) => (
                    <OrangizerBlock data={marketing} key={indx} />
                ))}
            </div>
        </div>
        <div>
            <h1 className="committee-header"> Technology </h1>
            <div className="organizer-list-container">
                { data.technology.map((technology, indx) => (
                    <OrangizerBlock data={technology} key={indx} />
                ))}
            </div>
        </div>
        <div>
            <h1 className="committee-header"> Sponsorship </h1>
            <div className="organizer-list-container">
                { data.sponsorship.map((sponsorship, indx) => (
                    <OrangizerBlock data={sponsorship} key={indx} />
                ))}
            </div>
        </div>
        
    </div>
        
)

export default OrganizerList