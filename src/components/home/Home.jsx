import React from 'react';
import { connect } from 'react-redux';
import {getIndex} from "../../actions/indexActions.js"


@connect((store) =>{
    return {
        index: store.index
    }
})
class Home extends React.Component{
    
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(getIndex())
    }
    componentWillUnmount(){
    }
    render(){
        return(
                <section id="page-title">
                    <div className="container clearfix">
                    <h1>hellow world </h1>
                    </div>
                </section>
        )
    }
}
module.exports = Home;