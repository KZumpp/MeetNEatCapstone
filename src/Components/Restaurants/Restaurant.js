import React, { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { Container, Paper, Button} from '@material-ui/core';
import Tooltip from '@mui/material/Tooltip';
import Header from "../Header";
import Footer from "../Footer";
import RestaurantCard from "./RestaurantCard";
import ThumbsUpButton from "./ThumbsUpButton";
import ThumbsDownButton from "./ThumbsDownButton";



export default function Restaurant() {
    const paperStyle = {padding: '40px 10px', width: 500, 
    margin: '20px auto', textAlign: 'center'}
    const query = useRef(); //need to use useRef to track state in form
    let doesMatch = false;
    const [restArr, setRestArr] = useState([]); //contains all of our restaurant data
    const [savedRest, setSavedRest] = useState([]); //this should only be updated when the thumbs up is true
    const [rest, setRest] = useState({ //each restaurant object
        name: '',
        freeformAddress: '',
        type: '',
        phone: '',
        hours: [], 
        thumbsUp: false
    });
    
//set restaurants to array
function fetchRestaurants (query) {
fetch(`http://localhost:8081/restaurants/search/${query}`, {
    method: 'GET',
    headers: {
        "Content-Type" : "application/json",  
        'Access-Control-Allow-Origin': '*'
    }
})
      .then(response => response.json())
      .then((data) => {
        setRestArr(data)
        console.log(restArr);
      })

    }
    useEffect(() => {
        fetchRestaurants();
    
        }, []); //only want this to run once when rendered


const handleSearch = (e) => {
    e.preventDefault(); //stops the default action of the button to stop a reload
    fetchRestaurants(query); 
    //giving query access to our form so we can then send this query to our API by letting
    //us have access to the user's input value at anytime, which we can then pass to our fetch functino to make the API request
}    

function saveRestaurant() {
    fetch("http://localhost:8081/favorites", { //save all pertinent data to db 
    method: 'POST',
    headers: {
        "Content-Type" : "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:8081/',
        Vary: 'Origin'
    },
    body: JSON.stringify(rest)
    }).then(() => {
        setSavedRest(prevSavedRest => ({ //add new object to end of array containing all of this data(which is what's saved to our DB)
            ...prevSavedRest,
            rest
    }));
})
}

async function toggleThumbs() {
    console.log("up success");
    setRest(prevRest => ({
        ...prevRest,
        thumbsUp: true  
    }))
    saveRestaurant();
}


//  const options = restArr.map(rest => { //need to display restaurant one at a time with the thumbs up thumbs down option
//         return (
//         <RestaurantCard
//         restName={rest.name}
//         type={rest.code}
//         call={rest.phone}  
//         />
//         )
//     })

function options() {
    console.log("workinggggggg");
}

return (
    <>
    <Header />
    <Container>
    <form onSubmit={handleSearch} className="search-bar">
    <TextField 
    className="search-bar"
    // id="filled-basic-full-width-small"
    // variant="filled"
    autoFocus={true}
    inputRef={query}
    label="Find a nearby eat!"
    style={{fontFamily: 'Quicksand'}}
    placeholder="Enter city or zipcode"
    required={true}
    fullWidth
    // margin="normal"
    InputProps={{
    
        endAdornment: (
            <InputAdornment position="end">
            <Button className="search" variant="contained" type="submit">
                Go!
            </Button>
            </InputAdornment>
        )
    }}
    />
</form>
<Paper elevation={10} style={paperStyle}>
    <div className="restaurant-display"> 
        <p>This is our restaurant:
        {doesMatch ? {options} : "Please try another area"} </p> 
        <Tooltip title="Add to favorites" arrow>
        <span>
        <ThumbsUpButton handleClick={toggleThumbs} />
        </span>
        </Tooltip>
        <Tooltip title="Get new restaurant option" arrow>
        <span>
        <ThumbsDownButton handleClick={options}/>
        </span>
        </Tooltip>
       
        </div>
        </Paper>
        </Container>
        <Footer />
        </>
        //would like the restaurant showing to be conditionally rendered

    )
}