import React from "react";
import point from "../images/Fill 219.png"


export default function Cards(props) {
    return (
        <>
        <section className="card">
            <img className="card--imageMountain" src={props.item.imageUrl}/>
            <div>
                <img className="card--imagePoint" src={point} />
                <span className="card--location">{props.item.location}</span>
                <a className="card--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h1 className="card--title">{props.item.title}</h1>
                <span className="card--startDate">{props.item.startDate} - </span>
                <span className="card--endDate">{props.item.endDate}</span>
                <p className="card--description">{props.item.description}</p>
            </div> 
            
        </section>
        <div className="card--underline"></div>
        </>
    )
}