import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
// import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { Container, Paper, Button} from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Header from "../Header";
import Footer from "../Footer";
import SendToMobileTwoToneIcon from '@mui/icons-material/SendToMobileTwoTone';
import LunchDiningTwoToneIcon from '@mui/icons-material/LunchDiningTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import ShowFavorites from "../Restaurants/ShowFavorites";

//still need to set time and date parameters 

export default function GenerateInvites() {
    const paperStyle = {padding: '40px 10px', width: 500, 
    margin: '20px auto', textAlign: 'center'}
const email = useRef();
const [invite, setInvite] = useState({
    closingDate: '',
    closingTime: ''
})
const [guests, setGuests] = useState([]); //will we need to store these in an array?
const eatsList = [
    { label: 'this where we will pull in our favorites lists' },
];

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


// Handling the email change, not sure if we need this? Emails need to be saved as list
const handleEmail = () => {
setGuests(prevGuests => [
    ...prevGuests,
    email.current.valueOf])
    setSubmitted(false);
};


async function createInvite() {
    const invite = {email, eatsList} //need time/date parameter
    fetch("http://localhost:8081/invites/create", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(invite)
    }).then(() => {
        console.log("invite sent")
    })
}
    useEffect(() => {
        createInvite();
    
        }, []);


// Handling the form submission
const handleSubmit = () => {
    // e.preventDefault();
    // if (email === '') {
    // setError(true);
    // } else {
    // createInvite();
    // setSubmitted(true);
    // setError(false);
    setGuests(prevGuests => [
        ...prevGuests,
        email.current.value])
        setSubmitted(false);
        console.log(email);
    }
    

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>Your Meet has been sent!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{display: error ? '' : 'none',}}>
<h1>Please enter all the fields</h1>
</div>
);
}

const generateRandomString = () => Math.random().toString(36).slice(2); //Generate a random URL
// <Route exact path={ "/" + generateRandomString()} render={() => <ShowFavorites />} /> //Use react-router-dom to direct that URL to the ShowFavorites component

return (
    <>
<Header />
<Paper elevation={10} style={paperStyle}>
<Container>
<div className="form">
<div>
<h3>Generate A New Meet</h3>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form> 
<label className="label"><EmailTwoToneIcon sx={{color: '#A0DB8E'}} />Email: </label>
<input 
id="email" 
name="email"  
type="text" 
defaultValue={email} />

<label className="label"> <LunchDiningTwoToneIcon sx={{color: '#A0DB8E'}} /> Choose an Eats list: </label>
<Autocomplete
        disablePortal
        id="combo-box-demo"
        options={eatsList}
        sx={{ width: 200, height: 50 }}
        renderInput={(params) => <TextField {...params} label="Eats" />}
    />


<Button onClick={handleSubmit} type="submit" >
<SendToMobileTwoToneIcon sx={{color: '#A0DB8E'}} /> Send out your Meet!
</Button>
</form>
</div>
</Container>  
</Paper> 
<Footer />
</>
);

}
