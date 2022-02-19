import React from 'react'
import DayInformation from '../DayInformation'
import Weather from '../WeatherInformation';
import './style.css'

const Card = () => {
    return (
        <div id='card' >

            <DayInformation />
            <Weather />

        </div>
    )
}

export default Card