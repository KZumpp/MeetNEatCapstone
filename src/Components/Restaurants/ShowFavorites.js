import React from "react";
import { Container, Paper, Button} from '@material-ui/core';
import Header from "../Header";
import Footer from "../Footer";
import Tooltip from '@mui/material/Tooltip';
import ThumbsUpButton from "./ThumbsUpButton";
import ThumbsDownButton from "./ThumbsDownButton";

export default function ShowFavorites(props) {

    const paperStyle = {padding: '40px 10px', width: 500, 
    margin: '20px auto', textAlign: 'center'}

    async function allFavorites() {
        fetch('http://localhost:8081/favorites', {
         method: 'GET',
            headers: {
            "Content-Type" : "application/json"
        }
    })
    }

    function handleUp() {
        console.log("up on this page")

    }

    function handleDown() {
        console.log("down on this page")

    }
    return (
        <>
        <Header />
        <div className="favorites">
        <Paper elevation={10} style={paperStyle}>
      <h3>Favorited Eats</h3>
            <li>
            <Tooltip title="YES to meeting here!" arrow>
            <span>
            <ThumbsUpButton handleClick={handleUp}/>
            </span>
            </Tooltip>
                there will be some data here at some point lol
            <Tooltip title="NO to meeting here!" arrow>
            <span>
            <ThumbsDownButton handleClick={handleDown}/>
            </span>
            </Tooltip>
            </li>

        </Paper>
        </div>
        <Footer />
        </>
    )
}