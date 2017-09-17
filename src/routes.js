import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Dynamic Components
import Home from  "./components/home/Home.jsx"

//Static Components
import Header from "./components/application/Header.jsx"
import Body from "./components/application/Body.jsx"
import ArticleView from "./components/application/ArticleView.jsx"
import NavegationMenu from "./components/application/NavegationMenu.jsx"
import SearchForm from "./components/application/SearchForm.jsx"


const Status = function ({ code, children }){
  return (
        <Route render={function({ staticContext }) {
          if (staticContext)
            staticContext.status = code
          return children
        }}/>
    )
}

const NotFound = function(){
    return (
      <Status code={404}>
        <div>
          <h2> Sorry, can not find this page </h2>
        </div>
      </Status>
    )
}
const routes = (
    <div>
      <div class="container">
        <Header/>
        <SearchForm/>
        <NavegationMenu/>
        <ArticleView/>
      </div>
      <div>
        <Switch>
            <Route path="/" component={Home}/>  
            <Route component={NotFound}/>
        </Switch>
      </div>
      <footer>Copyright Savi</footer>
    </div>
)
    
export default routes;