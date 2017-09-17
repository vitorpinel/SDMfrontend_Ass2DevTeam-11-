import React from 'react';
import {link} from 'react-router-dom'

class ArticleView extends React.Component{
	constructor(props){
		super(props)
		this.handleLink = this.handleLink.bind(this)
	}
	handleLink(){
		console.log("ArticleView link")
	}
	render(){
		var self = this;
		var article = "Article shoud be view in here"

		return(
			<div>
				<article>
  					<h1><menu type="toolbar"></menu></h1>
  
  					<p>This blog is for articles. You can read and write articles here. For getting more of it please regiter yourself and enjoy this new corner of knowledge.</p>
  					<p> Happy Articling  </p>
  
				</article>
			</div>
		)
	}
}
module.exports = ArticleView;