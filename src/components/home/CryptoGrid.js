import React, { Component } from 'react';
import connect from 'react-redux';
import CryptoBox from './CryptoBox';
import * as actionCreators from '../../redux/actionsCreators';


class CryptoGrid extends React.Component {
  constructor(props) {
   super(props);
 }

 componentDidMount() {
           fetch('https://api.coinmarketcap.com/v1/ticker/')
           .then(response => response.json())
           .then(results => this.props.dispatch(actionCreators.update(results)))
 }



  render() {

  const cryptoGrid = this.props.cryptoList.map((crypto) => (
          <CryptoBox name={crypto.name} priceUsd={crypto.price_usd}/>
    ));

    return (
      <div>
        { cryptoGrid }
      </div>
    );

  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    cryptoList: state.cryptoList,
  }
}


export default connect(mapStateToProps)(CryptoGrid);
