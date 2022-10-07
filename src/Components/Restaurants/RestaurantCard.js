import React, { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { Container, Paper, Button, Card} from '@material-ui/core';
import Header from "../Header";
import Footer from "../Footer";
import ThumbsUpButton from "./ThumbsUpButton";
import ThumbsDownButton from "./ThumbsDownButton";


export default function RestaurantCard(props) {
    const paperStyle = {padding: '40px 10px', width: 500, 
    margin: '20px auto', textAlign: 'center'}
    return (
        <div className="card">
        <Paper elevation={10} style={paperStyle}>
            <div className="rest-details">
                <h3>{props.restName}</h3>
                <p>{props.call}</p>
                <p>{props.type}</p>
            </div>
            </Paper>
        </div>
    )

}                               