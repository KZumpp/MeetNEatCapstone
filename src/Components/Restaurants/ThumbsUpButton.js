import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';

export default function ThumsbUpButton(props) { //can pass the toggle function as a prop to this I think
    return (
        <>
        
    
            <Button className="up" onClick={props.handleClick}>
            <ThumbUpAltTwoToneIcon sx={{color: 'green'}} />
            </Button>
          
        
        </>
    )
}