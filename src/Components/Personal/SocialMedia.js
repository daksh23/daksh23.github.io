/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialMedia = () => {
    return (
        <Stack direction="row" spacing={2} className="SocialMediaCard tooltip">
            <a
                className='Twitter'

                href="https://www.twitter.com/dakshpatel664"
                target="_blank"
                rel="noopener noreferrer">
                <TwitterIcon/>
            </a>

            <a
                href="https://www.github.com/daksh23"
                target="_blank"
                rel="noopener noreferrer">
                <GitHubIcon/>

            </a>

            <a
                className='LinkedIn'
                href="https://www.linkedin.com/in/daksh-patel-4d"
                target="_blank"
                rel="noopener noreferrer">
                <LinkedInIcon/>

            </a>

            <a  className='Email' onClick={
                (e) => { window.location.href = "mailto:dakshpatel664@gmail.com";
                e.preventDefault();
            }}
                target="_blank"
                rel="noopener noreferrer">
                <EmailIcon/>
            </a>
            <span class="tooltip_text">
                <p className="getInTouch">Get In Touch</p>
            </span>
        </Stack>
    )

}

export default SocialMedia