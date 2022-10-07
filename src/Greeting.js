import React from "react";


export default function Greeting() {
var myDate = new Date();
var hours= myDate.getHours();
var greet;

if (hours < 12)
    greet =  "morning";
else if (hours >= 12 && hours <= 17)
    greet = "afternoon";
else if (hours >= 17 && hours <= 24)
    greet = "evening";

return (
 <span>Looks like a great {greet} to eat!</span>
)


}