import React, { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { Container, Paper } from '@material-ui/core';

import Header from "../Header";
import Footer from "../Footer";
import InviteButton from "./InviteButton";

// function not(a, b) {
//     return a.filter((value) => b.indexOf(value) === -1);
//   }
  
//   function intersection(a, b) {
//     return a.filter((value) => b.indexOf(value) !== -1);
//   }
  
//   function union(a, b) {
//     return [...a, ...not(b, a)];
//   }
  

export default function InvitePage() {

  return (
    <>
    <Header />
    <InviteButton />
    <Footer />
    </>
    )
}

//functions for this page
//returns a card with a list of pending invites
//returns a card with invites you've been sent
//generate new --> switch router to form page? pop up?