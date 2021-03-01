import React, { Component } from 'react';
import axios from 'axios';
import store from '../Redux/store';

class Home extends Component {
    componentDidMount() {
        
        axios.get('https://gist.githubusercontent.com/sinuna/817270bae0ef80bb6a26e96830e14814/raw/bfb40cbc0d2966eba5dcaf38505187b1b3296863/food.json').then((res)=>{
            store.dispatch({
                type:'FOOD',
                payload:res.data
            })
        //    console.log(res.data)
        })
        axios.get("https://gist.githubusercontent.com/sinuna/32930ce3ef3ece4fefeb177c98f1fb34/raw/a13f9a9362bddbc8b65a1e5b21633f492b4453fc/articles.json").then((res)=>{
            store.dispatch({
                type:'POST',
                payload:res.data
            })
        //    console.log(res.data)
        })
        
    }
    render() {
        return (
            <section id="home-page">                
            <div className="container mt-5" >
            </div>
            </section>
        );
    }
}

export default Home;