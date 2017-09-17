import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component{

    constructor(props){
        super(props)
        this.handleLink = this.handleLink.bind(this)
    }

    handleLink(){
        console.log("handling the link")
    }

    render(){
        var self = this;
        var menu = [
            {
                value:"Home",
                link: "/"
            },
            {
                value:"User",
                link:"/users"
            }
        ]
        var menuItems = menu.map((item,i) => {
            return(
                <li key={i} >
                    <Link to={item.link} onClick={self.handleLink}>
                        {item.value}
                    </Link>
                </li>
            )
        });

        return(
            <div id="header" className="full-header">
    
                <h2>
                    <blockquote> "Create your profile and enjoy blogging" </blockquote>
                </h2>
    
            </div>
        )
    }
}

module.exports = Header;