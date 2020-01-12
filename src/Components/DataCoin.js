import React, { Component } from 'react';

class DataCoin extends Component {
    componentDidMount() {
        console.log("Inside CheckData");
        console.log(this.props.objcoin);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row coin-title d-flex justify-content-center">
                    <h3 onClick={() => {
                        window.open(this.props.objcoin.data.links.homepage[0]);

                    }
                    }>{this.props.objcoin.data.name} - {this.props.objcoin.data.symbol}</h3>
                </div>
                <div className="row result text-center">
                    <div className="col-xl-2 col-lg-2 col-md-2 result-table">
                        <table border="1px">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={this.props.objcoin.data.image.large} alt="Coin-Thumb" height="150px" width="150px" />

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="list-unstyled">
                                            <li key="origin">Country of origin -<br />{this.props.objcoin.data.country_origin}<br /></li>
                                            <li key="birthdate"> Date of Appearence -<br />{this.props.objcoin.data.genesis_date}</li>
                                            <li key="capRank"> Market Cap Rank - {this.props.objcoin.data.market_cap_rank}</li>
                                            <li key="Gecho"> Coin Gecho -</li>
                                            <li key="rank"> Rank - {this.props.objcoin.data.coingecko_rank}</li>
                                            <li key="score"> Score - <br />{this.props.objcoin.data.coingecko_score}</li>
                                            <li key="devScore">Developer Score -<br />{this.props.objcoin.data.developer_score}</li>
                                            <li key="Community"> Community Score -<br />{this.props.objcoin.data.community_score}</li>
                                            <li key="liquidity"> Liquidity Score -<br />{this.props.objcoin.data.liquidity_score}</li>
                                            <li key="PIS"> Public Interest Score -<br />{this.props.objcoin.data.public_interest_score}</li>

                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10 mt-5">
                        <p>{this.props.objcoin.data.description.en}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataCoin;