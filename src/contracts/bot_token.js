import contract from 'truffle-contract';
import BOTTokenContract from './build/contracts/BOTToken.json';

const BOTToken = {
  contract: null,
  instance: null,

  init: () => {
    let self = this;
    new Promise((resolve, reject) => {
      self.contract = contract(BOTTokenContract);
      self.contract.setProvider(window.web3.currentProvider);
      self.instance = self.contract.deployed().then(instance => {
        return instance;
      }).catch(error => {
        reject(error);
      });
    });
  },
  getSystemWallet: () => {
    console.log("hehe");
    let self = this;
    return new Promise((resolve, reject) => {
      self.instance
        .then(BOTToken => {
          return BOTToken.wallet();
        })
        .then(wallet => {
          console.log(wallet);
          resolve(wallet);
        })
        .catch(error => {
          console.error(error);
        });
    });
  },

  mintToken: (_id, _amount) => {
    let self = this;
    return new Promise((resolve, reject) => {
     self.instance
     .then(BOTToken => {
       BOTToken.mint(_id, _amount, {from: window.web3.eth.accounts[0]});
     })
       .then(response => {resolve(response)})
       .catch(error => {reject(error)});
    });
  },

  burnToken: (_id, _amount) => {
    let self = this;
    return new Promise((resolve, reject) => {
     self.instance
     .then(BOTToken => {
       BOTToken.burnFrom(_id, _amount, {from: window.web3.eth.accounts[0]});
     })
       .then(response => {resolve(response)})
       .catch(error => {reject(error)});
    });
  }
};

export default BOTToken;
