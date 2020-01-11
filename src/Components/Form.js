import React, { Component } from 'react';
import axios from 'axios'
import DataCoin from './DataCoin';
import Load from './Load';

export default class Form extends Component {
    state = {
        currency: '',
        loading: false,
        showData: false,
        coins: {},
        searchedCoin: {}
    }
    componentDidMount() {
        axios.get(`https://api.coingecko.com/api/v3/coins/list`).then(res => {
            this.setState(
                {
                    loading: true,
                    coins: res
                }
            );
        })
    }
    handleChange = (e) => {
        e.preventDefault();
        let obj = this.state.coins.data.filter(coin => {
            return coin.name === this.state.currency;
        });
        axios.get(`https://api.coingecko.com/api/v3/coins/${obj[0].id}`)
            .then(res => {
                this.setState({
                    searchedCoin: res,
                    showData: true
                })
            }).catch((err) => {
                console.log(`An error has been occurred`);
            });
        console.log('Submit fired');
    }

    render() {
        return (
            <div>
                {!this.state.loading ? (<Load />) : (
                    <div>
                        <form className="Form" onSubmit={this.handleSubmit}>
                            <h1 className="Name">Crypto Wiki</h1>
                            <input className="search-input mb-2" width="60px" 
                            type="text" placeholder="Enter the Crypto Currency Name" name="currency" value={this.state.value} onChange={this.handleChange} 
                           />
                           <button type="submit" className="SearchButton btn btn-success ml-2"> Get Info About Coin</button>
                        </form>
                        {!this.state.showData ? (<div> <p className="font-weight-bold text-center"> Search for a coin</p></div>) : (<DataCoin dataobj={this.state.searchedCoin} />)}
                        
        </div>
                )
                }
            </div>
        )
    }
}