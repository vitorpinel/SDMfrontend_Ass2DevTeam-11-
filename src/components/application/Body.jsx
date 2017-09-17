import React from 'react';
import {Link} from 'react-router-dom'

class Body extends React.Component{

    constructor(props){
        super(props)
        this.handleLink = this.handleLink.bind(this)
    }

    handleLink(){
        console.log("handling the link")
    }

    render(){
        var self = this;

        
        return(
            <body>

                <div class="container">

                <nav>
                  <ul>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#Users">Users</a></li>
                    <li><a href="#Contact">Contact</a></li>
                  </ul>
                </nav>

                <article>
                  <h1><menu type="toolbar"></menu></h1>
                  
                  <p>This blog is for articles. You can read and write articles here. For getting more of it please regiter yourself and enjoy this new corner of knowledge.</p>
                  <p> Happy Articling  </p>
                  <p>  Jimmy worked here.</p>
                </article>


                </div>
                <footer>Copyright Savi</footer>

            </body>
        )
    }
}

module.exports = Body;