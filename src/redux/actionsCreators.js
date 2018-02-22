/*
 * action types
 */

const CRYPTOLIST = 'CRYPTOLIST'

/*
 * action creators
 */

var updateCryptoList = function (cryptoList) {
  return {
    type: 'UPDATE',
    cryptoList: cryptoList
  }
}
