import React, {useState} from 'react'
// import React from 'react '
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack'; 
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';

const massive = [];

const Inputs = ({item}) => {
        const [kg, setKg ] =  useState('')
        const [price, setPrice] = useState('')

        const narxVazni = () =>{
            massive.push(kg * price)
            console.log(massive);
            setKg('')
            setPrice('')
        }
        return (
                <Box
                component='form'
                sx={{
                    '& > :not(style)':{m: 1},
                }}
                noValidate
                autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <h2>{item}</h2>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        placeholder="vazni"
                        onChange={(e)=> setKg(e.target.value)}
                        value={kg}  />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                            id="filled-basic"
                            label="Filled"
                            variant="filled"
                            placeholder="Narxi"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}  />
                        </Grid>
                        <Grid item xs={3}>
                            <Button onClick={narxVazni} style={{width:80, height:50, backgroundColor:'teal'}} variant='container' color="green">
                            Success 
                            </Button>
                            </Grid>
                    </Grid>
                </Box>
    )
}
export { massive } 
export default Inputs