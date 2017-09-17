import React from 'react';
import {Link} from 'react-router-dom'

class SearchForm extends React.Component{

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
            <div id="header" className="full-header">
    
                <header>
                    <h1>Who loves article!!</h1>
                </header>
                
            </div> 
        )
    }
}

module.exports = SearchForm;