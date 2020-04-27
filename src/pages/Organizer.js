import React from 'react'
import Organizer from '../components/Organizer'

import data from '../Organizers/Organizer.json'

import '../styles/Organizer.css'

const OrganizerList = () => (
    <div>
        <div>
            <h1 className="committee-header"> Director </h1>
            <div className="organizer-list-container">
                { data.director.map((director, indx) => (
                    <Organizer data={director} key={indx} />
                ))}
            </div>
        </div>
        <div>
            <h1 className="committee-header"> Logistics </h1>
            <div className="organizer-list-container">
                { data.logistics.map((logistics, indx) => (
                    <Organizer data={logistics} key={indx} />
                ))}
            </div>
        </div>
        <div>
            <h1 className="committee-header"> Marketing </h1>
            <div className="organizer-list-container">
                { data.marketing.map((marketing, indx) => (
                    <Organizer data={marketing} key={indx} />
                ))}
            </div>
        </div>
        <div>
            <h1 className="committee-header"> Technology </h1>
            <div className="organizer-list-container">
                { data.technology.map((technology, indx) => (
                    <Organizer data={technology} key={indx} />
                ))}
            </div>
        </div>
        <div>
            <h1 className="committee-header"> Sponsorship </h1>
            <div className="organizer-list-container">
                { data.sponsorship.map((sponsorship, indx) => (
                    <Organizer data={sponsorship} key={indx} />
                ))}
            </div>
        </div>
        
    </div>
        
)

export default OrganizerList