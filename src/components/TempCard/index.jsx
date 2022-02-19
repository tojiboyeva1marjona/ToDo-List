import { Chip } from "@mui/material";
import React from 'react'

const TempCard = (props) => {
    return (
        <div style={{width: 600}} className="py-3 text-center">
            <div style={{ width: 70 }}>
                <Chip style={{
                    backgroundColor: '#252d3d',
                    color: 'white'
                }}
                    label={props.label}
                    size="small"
                />

                <img width='70' height='70' src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
                <h6 className='temp'>{props.temp} &deg;</h6>
            </div>
        </div>
    )
}

export default TempCard