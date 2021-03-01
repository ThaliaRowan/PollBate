import React from "react";
import "../Posts.css";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Button} from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Posts(){
    return(
        <div className="Post">
            <div className="PostAvatar">
                
            </div>
            <div className="PostBody">
                <div className="PostHead">
                    <div className="PostUser">
                        <h3>Anonymous</h3>
                    </div>
                    <div className="PostDate">
                        <p>today</p>
                    </div>
                </div>
                <div className="PostText">
                    <p>How does this look?</p>
                </div>
                <div className="Polls">
                <ul>
                    <li>
                    <Button variant="contained">option1 </Button>
                    </li>
                    <li>
                    <Button variant="contained">option1 </Button>
                    </li>
                    <li>
                    <Button variant="contained">option1 </Button>
                    </li>
                </ul>
                
                </div>
                <div className="PostFoot">
                    <div className="Favorite">
                        <StarBorderIcon />
                    </div>
                    <div className="Comments">
                        <ChatBubbleOutlineIcon />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Posts;