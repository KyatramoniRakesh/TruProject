import React from "react";
import "../CSS/LocationStrips.css";

function LocationStrip({ locations, onSelect, label }) {
    return (
        <section className="locations-flex">
            <div className="locations-inner">
                {locations.map((city, index) => (
                    <span
                        key={index}
                        className="location-item"
                        onClick={() => onSelect(city)}
                        style={{ cursor: "pointer" }}
                    >
                        {label} {city}
                        <span className="pipe"> |</span>
                    </span>
                ))}
            </div>
        </section>
    );
}

export default LocationStrip;
