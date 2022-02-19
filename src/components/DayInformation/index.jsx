import { Chip } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

const DayInformation = () => {
    const [search, setSearch] = useState('Fergana')
    const [Country, setCountry] = useState('')

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=50f234b2203d229bef3cf1918ab52ec5`)
            .then((response => {
                setCountry(response.data.name)

            })
            )
    }, [])


    let d = new Date();
    let date = d.getDate()
    let year = d.getFullYear()
    let month = d.toLocaleString('eng-US', { month: 'long' })
    let day = d.toLocaleString('eng-US', { weekday: 'long' })

    let time = d.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',

    })

    return (
        <div className='container'>
            <div className='container d-flex py-4'>
                <div className='text-start'>
                    <h1 className='time'>{time}<sub className='sub'> PM</sub></h1>
                    <p id='day'>{day}, {date} {month} {year}</p>

                </div>
                <div className='text-end' >
                    <h4 className='country'>Uzbekistan</h4>
                    <h6 className='city'>{Country}</h6>
                </div>


            </div>

            <div className='px-5'>
                <div className='d-flex'>
                    <Chip label='8:00'
                        style={{
                            backgroundColor: '#252d3d',
                            color: 'white'
                        }}
                        size='small'
                    />
                    <p className='p'>Check Dribble Popular pages</p>
                </div>
                <div className='d-flex'>
                    <Chip label='12:00'
                        style={{
                            backgroundColor: '#252d3d',
                            color: 'white'
                        }}
                        size='small'
                    />
                    <p className='p' >Make Dribble Shot</p>
                </div>
                <div className='d-flex'>
                    <Chip label='21:00'
                        style={{
                            backgroundColor: '#252d3d',
                            color: 'white'
                        }}
                        size='small'
                    />
                    <p className='p'>Check if you are on the Popular page</p>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default DayInformation