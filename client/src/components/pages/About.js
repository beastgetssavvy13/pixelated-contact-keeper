import React from 'react'
import normal from './normal.jpeg';
const About = () => {
    return (<div>
        <h1 > About this app </h1>
        <p className="my-1" >
            This is a full stack React app
        for keeping contacts </p> <p className="bg-success p" >
            <strong > Version: </strong>1.0.0 </p>
        <div>
            <p className="bg-dark p" >
                <div class="square" >
                    <img
                        src={normal}
                        style={{ width: '200px', margin: 'auto', display: 'round' }}
                        alt='Loading...'
                    /></div>
                <strong >   Developer: </strong>Kavish Pandit<br />
                <strong >   Email: </strong>kavish.pandit178@gmail.com <br />
                <strong >   Technologies Used: </strong>VS STUDIO | POSTMAN | MONGODBATLAS | HEROKU <br />
                <strong >   Github Link: </strong>https://github.com/beastgetssavvy13?tab=repositories <br />
                <strong >   Description: </strong> Created an application using React Hooks and Express Js Server. Feel free to reach out if any issues
            <br />
            </p>

        </div>
    </div>
    )
}
export default About