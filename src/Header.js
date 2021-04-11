import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({backButton}) {
    const history = useHistory();

    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ):(
                <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
                
            )}
            <Link to = "/">
            <img 
            className="header__logo"
            src="https://www.emrearal.com/wp-content/uploads/2017/08/tinder-icon-new.png" 
                  alt="" />
            </Link>
            <Link to = "/Chat">
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
            </Link>
            

            
        </div>
    )
}

export default Header
