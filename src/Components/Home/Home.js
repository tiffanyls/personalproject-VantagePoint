import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import Header from './../Header/Header';
import Searchbar from "./../Search/SearchBar";
import './Home.css';


class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
        image: []
    };

    }
    componentDidMount(){
        axios.get('/api/getImages').then(response => {
            console.log(response)
            this.setState({image: response.data[0].image});
        })
    }
    
    render(){
        return (
        <div className="container">
        <Header /> <button onClick={() => window.location.href = "http://localhost:3001/login"} className="login">Login/Sign Up</button>
        <img src = {this.state.image}/>
        <div className="searchbar">
        <Searchbar />
        </div>
        
        </div>
        )}
}
export default withRouter(Home);