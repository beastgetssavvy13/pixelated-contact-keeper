import React from 'react'

const About = () => {
    return ( <div>
        <h1 > About this app </h1> 
        <p className = "my-1" >
        This is a full stack React app
        for keeping contacts </p> <p className = "bg-success p" >
        <strong > Version: </strong>1.0.0 </p>
        <p className="bg-dark p-2" >
            <strong > Developer: </strong>Kavish Pandit<br />
            <strong > Email: </strong>kavish.pandit178@gmail.com <br/>
            <strong > Description: </strong> Created an application using Reat Hooks and Express Js Server. Feel free to reach out if any issues </p>  
        </div>
    )
}
export default About