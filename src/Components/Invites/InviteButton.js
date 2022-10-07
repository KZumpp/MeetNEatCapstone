import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Container, Paper } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InviteButton() {
  const paperStyle = {padding: '40px 10px', width: 500, 
    margin: '20px auto', textAlign: 'center'}
  return (
    <Paper elevation={10} style={paperStyle}>
    
        <Typography>
         <h4>Send a request to your 
         friends to meet up and 
         check out your new list of favorite eats!</h4>
        </Typography>
        <Typography sx={{ mb: 1.5 }}  variant= "p">
        <p>
          Want to eat with more than one person? Send a meet request out to a list of friends via email, 
          and have them vote for their fave spot to eat from your options! Friends can vote on their eat options
          up until the time and date YOU set!
          </p>
        </Typography>
   
      
      <Link to="/meets/new">
        <Button className="invite-button" size="small">CLICK HERE TO SET UP NEW MEET</Button>
        </Link>
    </Paper>
  );
}
