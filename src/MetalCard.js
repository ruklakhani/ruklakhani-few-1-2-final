// src/MetalCard.js

import React from 'react'
import Likes from './Likes.js'
import './MetalCard.css'

function MetalCard(cards) {
    const { band_name, fans, formed, origin, split, style} = cards
    return (
        <div className="metal-card">
            <h1>{band_name}</h1>
            <div>
                fans: {fans} 
                <br></br>
                formed: {formed}
                <br></br> 
                origin: {origin} 
                <br></br>
                split: {split} 
                <br></br>
                styles: {style}
                <br></br>
                <Likes/>
            </div>
        </div>
    )
}
export default MetalCard