// src/MetalMeta.js

import React from 'react';
import data from './metal.json';
import MetalCard from './MetalCard.js';
import './MetalMeta.css'


function MetalMeta() {
    
    const cards = data.map(( {band_name, fans, formed, origin, split, style})=> {
        return (
            <MetalCard
                band_name={band_name}
                fans={fans}
                formed={formed}
                origin={origin}
                split={split}
                style={style}
            />
        )
    })
    return (
        <div className="metal-meta">
            <div className="total_bands">
                Total Bands: {data.length}
            </div>
            <div className="MetalList">
                {cards}
            </div>
        </div>
    )
}

export default MetalMeta