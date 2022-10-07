import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';


export default function ThumbsDownButton(props) {
    return (
        <>  
            <Button className="down" onClick={props.handleClick}>
            <ThumbDownTwoToneIcon sx={{color: 'red'}} />
            </Button>
        </>
    )
}