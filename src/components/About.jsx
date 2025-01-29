import { Box, Button, Rating, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
const About = () => {
  return (
    <>
     <div className="aboutbg">
      <div id="pt1">
        <div className="mero">
        <p id="sty">
        .
      </p>
      <h2 id="ti"> Why I Built This Website</h2>
      <br/><p id="sty">
      This website was created to show my basic knowledge of react.<br/>
      Although i still don't know much about react, I tried my best
      </p>
        </div>
      </div>
      <div id="pt2"> 
      <h2 id="ti"> Things I learned form this project</h2>
      <br/>
      <ol id="hhi" >
        <li>- React is easier to handel a multiple page</li>
        <li>- Have more library</li>
        <li>- Overall effective</li>
        <li>- More way to make site interactive</li>
      </ol>
      
         </div>
      <div className="pt3">
      <Box bgcolor={'#cacaaa'} p={5} display={'flex'}>
                <Box width={"50%"}>
                    <Typography variant='h4' sx={{ textDecoration: 'underline' }} color='secondary'> Address </Typography>
                    
                    <Typography variant="h5">Balkumari Lalitpur</Typography>
                    <Typography variant="h5">Phone: 9862223925</Typography>
                    <Typography variant="h5">E-mail: aayushpoudel.079@kathford.edu.np</Typography>
                    <Typography variant="h5">College Website:<Link href='#' underline='hover'> www.kathford.edu.np</Link> </Typography>
                </Box>
                <Box width={'50%'}>
                    <Typography variant='h4' sx={{ textDecoration: 'underline' }} color='secondary'>
                        Contact Form
                    </Typography>
                    <TextField label='Email' fullWidth placeholder='Enter your email here' helperText='e.g:something@something.com' required />
                    <TextField label='Subject' fullWidth placeholder='Subject' helperText='e.g:info, query' required />
                    <TextField label='Message' fullWidth multiline rows={5} />

                    <Button variant='contained' fullWidth>Submit</Button>
                    <Rating readOnly defaultValue={"3"} precision={0.1} />
                </Box>

            </Box>

      </div>
      </div> 


    </>
  )
}

export default About
