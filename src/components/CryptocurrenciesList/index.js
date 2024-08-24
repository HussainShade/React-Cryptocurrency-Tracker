// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cyrptocurrenciesList: []}

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  getCryptocurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({cyrptocurrenciesList: formattedData, isLoading: false})
  }

  render() {
    const {cyrptocurrenciesList, isLoading} = this.state

    return (
      <div className="main-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="crypto-image"
          alt="cryptocurrency"
        />
        <div className="table-container">
          <div className="table-heading-container">
            <h2 className="table-heading">Coin Type</h2>
            <div className="currency-container">
              <h2 className="table-heading">USD</h2>
              <h2 className="table-heading">EURO</h2>
            </div>
          </div>
          <ul>
            {isLoading ? (
              <div data-testid="loader" className="loader-container">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              cyrptocurrenciesList.map(item => (
                <CryptocurrencyItem CryptocurrencyData={item} key={item.id} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
