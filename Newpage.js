import React, { useEffect } from 'react'
import axios from "axios"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Data from './Data1';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './Wet.css'



function Newpage() {
    const [name, setName] = React.useState('')
    const [data, setData] = React.useState(true)


    const handalClick = async () => {
        try {
            let apikey = `64695d8b4857453da7b145746241307`
            let res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${name}&aqi=yes`)
            console.log(res.data)
            setData(res.data)
        }
        catch (err) {
            alert("Error in API")
        }

    }
    // const handalClick = () => {
    //     //http://api.weatherapi.com/v1//current?key='64695d8b4857453da7b145746241307'&q='Ahmedabad'
    //     let apikey = `64695d8b4857453da7b145746241307`
    //     axios.get(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${name}&aqi=no`)
    //         .then((res) => {
    //             console.log(res.data)
    //             setData(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         }, )

    // }
    return (
        <div >

            <div id="firstdiv">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h5" color="inherit" component="div">
                                Wether App by monil
          </Typography>
                        </Toolbar>
                    </AppBar>
                </Box> <br />
            </div>
            <center>
                <div id="mandiv">
                    <TextField id="outlined-basic" label="search" variant="outlined" onChange={(e) => { setName(e.target.value) }} />


                    <Button style={{ margin: "10px" }} variant="contained" onClick={() => { handalClick() }}>search</Button>

                    {data && data.current && <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="auto "
                                image={data.current.condition.icon}
                                alt="green iguana"

                            />
                            <div id="CardContent">
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Location  {data.location.name}<hr />
                                        Description  {data.current.condition.text}<hr />
                                        cloud  {data.current.cloud}<br /><hr />
                                        Wether {data.current.temp_c}°C<hr />
                                        Time {data.location.localtime}
                                    </Typography>
                                </CardContent>
                            </div>
                        </CardActionArea>
                    </Card>}
                </div>
            </center>
        </div>

    )
}
export default Newpage