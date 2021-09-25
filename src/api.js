import React from "react";
import axios from "axios";
import Prices from "./Screens/Prices";
import Exchanges from "./Screens/Exchanges";
import Coins from "./Screens/Coins";


class api extends React.Component {
    state = {
        isLoading: true,
        Price_data: [],
        Exchanges_data: [],
        Coins_data: []
    };

    //------------
    //Price 가져오기
    //------------
    getPrices = async () => {
        //데이터가 어딘가 안에 들어있는게 아니라 그냥 배열인데, 이를 어떻게 가져오지?
        const Price_data = await axios.get(
            "https://api.coinpaprika.com/v1/tickers"
        );
        console.log(Price_data);
        this.setState({ Price_data, isLoading: false });

    };
    //------------
    //Exchanges 가져오기
    //------------
    getExchanges = async () => {
        const Exchanges_data = await axios.get(
            "https://api.coinpaprika.com/v1/exchanges"
        );
        console.log(Exchanges_data);
        this.setState({ Exchanges_data, isLoading: false });

    };
    //------------
    //Coins 가져오기
    //------------
    getCoins = async () => {
        const Coins_data = await axios.get(
            "https://api.coinpaprika.com/v1/coins"
        );
        console.log(Coins_data);
        this.setState({ Coins_data, isLoading: false });

    };
    componentDidMount() {
        //랜더링 후 데이터 가져오기
        this.getPrices();
        this.getExchanges();
        this.getCoins();
    }


    render() {
        const { isLoading, Price_data, Exchanges_data, Coins_data } = this.state;
        return (

            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading..."</span>
                    </div>
                ) : (
                    <div className="data">

                        {/* 각각 랜더링할 데이터를 뿌려본다. */}

                        {Price_data.map(Price_data => (
                            <Prices
                                name={Prices.name}
                                symbol={Prices.symbol}
                            />
                        ))}

                        {Exchanges_data.map(Exchanges_data => (
                            <Exchanges
                                name={Exchanges.name}
                                description={Exchanges.description}
                                //website={Exchanges.website} //링크에서 웹사이트 어떻게 가져오지?
                            />
                        ))}

                        {Coins_data.map(Coins_data => (
                            <Coins
                                // rank={Coins.rank} //가져오긴 하지만 아직 안씀.
                                name={Coins.name}
                                symbol={Coins.symbol}
                            />
                        ))}

                    </div>
                )}
            </section>
        );
    }
}


export default api;