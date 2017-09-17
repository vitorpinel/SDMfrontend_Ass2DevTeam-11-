import React from 'react';
import {Link} from 'react-router-dom'

class NavegationMenu extends React.Component{

    constructor(props){
        super(props)
        this.handleLink = this.handleLink.bind(this)
    }

    handleLink(){
        console.log("handling the link")
    }

    render(){
        var self = this;
        var articleMenu = [
            {
                value:"article_1",
                link:"teste article 1"
            },
            {
                value:"article_2",
                link:"teste article 2"
            }

        ];
        var articlesList = articleMenu.map((item,i) => {
            return(
                <li key={i} >
                    <Link to={item.link} onClick={self.handleLink}>
                        {item.value}
                    </Link>
                </li>
            )
        })
        return(
            <div id="header-wrap">
                    <div className="container clearfix">
                        <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
                        <nav id="primary-menu" className="style-4">
                            <ul>
                                {articlesList}
                            </ul>
                        </nav>
                    </div>
            </div>
        )
    }
}

module.exports = NavegationMenu;