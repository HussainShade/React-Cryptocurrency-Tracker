// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {CryptocurrencyData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = CryptocurrencyData

  return (
    <li className="table-item-container">
      <div className="coin-container">
        <img src={currencyLogo} alt={currencyName} className="currency-image" />
        <p className="currency-text">{currencyName}</p>
      </div>
      <div className="currency-container">
        <p className="currency-text">{usdValue}</p>
        <p className="currency-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
