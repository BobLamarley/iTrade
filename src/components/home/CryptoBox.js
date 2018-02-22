import React, { Component } from 'react';

const CryptoBox = ({ name, priceUsd }) =>
  <div>
    <h2>{name} : {priceUsd}</h2>
  </div>;

export default CryptoBox;
