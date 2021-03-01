import React from "react";
import "../Header.css";
import { Button } from "@material-ui/core";


function Header(){
    return(
        <div className="Header">
            <div className="Title">
                <h2>PollBate</h2>
            </div>
            <div className="listItems">
                <ul>
                    <li>
                        <Button className="createPoll" >Create Poll</Button>
                    </li>
                    <li>
                        <p>Sign Up</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;