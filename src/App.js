import React from 'react';
import './App.css';
import Gallery from './container/Gallery/Gallery';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import ImgPage from './container/ImgPage/ImgPage';
import {connect} from 'react-redux';

class App extends React.Component {

  render(){
    let router = (
      <Switch>
        <Route path="/img/:id" component={ImgPage}/>
        <Route path="/" exact component={Gallery}/>
        <Redirect to="/"/>
      </Switch>
    );
    return (
      <React.Fragment>

        {router}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return {}
}

function mapDispatchToProps(dispatch){
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));