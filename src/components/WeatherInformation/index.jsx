import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Chip } from "@mui/material";
import './style.css'
import TempCard from '../TempCard';

const Weather = () => {

    const [temperature0, setTemperature0] = useState('')
    const [icon0, setIcon0] = useState('')
    const [temperature1, setTemperature1] = useState('')
    const [icon1, setIcon1] = useState('')
    const [temperature2, setTemperature2] = useState('')
    const [icon2, setIcon2] = useState('')
    const [temperature3, setTemperature3] = useState('')
    const [icon3, setIcon3] = useState('')
    const [temperature4, setTemperature4] = useState('')
    const [icon4, setIcon4] = useState('')
    const [temperature5, setTemperature5] = useState('')
    const [icon5, setIcon5] = useState('')


    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=41.311081&lon=69.240562&appid=50f234b2203d229bef3cf1918ab52ec5`)
            .then((response => {

                setIcon0(response.data.list[0].weather[0].icon)
                let temp0 = (response.data.list[0].main.temp - 273).toFixed(0)
                setTemperature0(temp0)
                console.log(response.data.list[0].weather[0])

                console.log(response.data.list);

                setIcon1(response.data.list[22].weather[0].icon)
                let temp1 = (response.data.list[22].main.temp - 273).toFixed(0)
                setTemperature1(temp1)

                setIcon2(response.data.list[15].weather[0].icon)
                let temp2 = (response.data.list[15].main.temp - 273).toFixed(0)
                setTemperature2(temp2)

                setIcon3(response.data.list[3].weather[0].icon)
                let temp3 = (response.data.list[3].main.temp - 273).toFixed(0)
                setTemperature3(temp3)

                setIcon4(response.data.list[25].weather[0].icon)
                let temp4 = (response.data.list[25].main.temp - 273).toFixed(0)
                setTemperature4(temp4)

                setIcon5(response.data.list[5].weather[0].icon)
                let temp5 = (response.data.list[5].main.temp - 273).toFixed(0)
                setTemperature5(temp5)

            })
            )
    }, [])

    // let d = new Date();
    // let day = d.toLocaleString('default', { weekday: 'long' })

    return (
        <div className='weather container d-flex gap-1 col-md-14'>
            <div className='d-flex align-items-center py-3'>
                <img src={`http://openweathermap.org/img/wn/${icon0}@2x.png`} alt="" />
                <div style={{ width: 100 }}>
                    <Chip style={{
                        backgroundColor: '#252d3d',
                        color: 'white'
                    }}
                        label='TODAY'
                        size="small"
                    />
                    <h6 className='temp0'>{temperature0} &deg;</h6>
                </div>
            </div>

            <TempCard
                img={icon0}
                label={'FRI'}
                temp={temperature0}
            />



            <TempCard
                img={icon2}
                label={'SAT'}
                temp={temperature2}
            />

            <TempCard
                img={icon3}
                label={'SUN'}
                temp={temperature3}
            />

            <TempCard
                img={icon4}
                label={'MON'}
                temp={temperature4}
            />

            <TempCard
                img={icon5}
                label={'TUE'}
                temp={temperature5}
            />

            <TempCard
                img={icon1}
                label={'WED'}
                temp={temperature1}
            />

        </div>
    )
}

export default Weather