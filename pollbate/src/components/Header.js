import React, {useState} from "react";
import "../Header.css";
import { Button, Menu, MenuItem } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';


function Header(){

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <div className="Header">
            <div className="Title">
                <h2>PollBate</h2>
            </div>
            <div className="listItems">
                <ul>
                    <li>
                        <Button className="createPoll" >Create</Button>
                    </li>
                    <li>
                        <PersonIcon aria-controls="simple-menu" aria-haspopup="true" className="ProfileIcon" onClick={handleClick} />
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                            <MenuItem onClick={handleClose}>Log In</MenuItem>
                        </Menu>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;