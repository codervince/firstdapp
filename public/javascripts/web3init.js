

console.log('Im here');
var message = "LindumFindum";
var userEthereumClient;
var userAddress;
// console.log(message);

window.addEventListener("load", function(){
  userEthereumClient = window.web3;
  window.web3.version.getNetwork((err, netId) => {
    switch (netId) {
      case "1":
        console.log('This is mainnet')
        break
      case "2":
        console.log('This is the deprecated Morden test network.')
        break
      case "3":
        console.log('This is the ropsten test network.')
        break
      default:
        console.log('This is an unknown network.')
    }
  });
});
document.querySelector("h1").addEventListener("click", function(event) {
  userEthereumClient.eth.sign(userEthereumClient.eth.coinbase,
  window.web3.sha3(message), function(error, data) {
    var signedAuthMessage = data;
    console.log(data);
    document.cookie = "signedAuthMessage=" + signedAuthMessage;
  })
});
//send to server side to check credentials
// var sigDecoded = EthUtil.fromRPCSig(signedAuthMessage);
// var recoveredPub = EthUtil.ecrecover(window.web3.sha3(message), sigDecoded.v, sigDecoded.r, sigDecoded.s);
// var recoveredAddress = EthUtil.pubToAddress(recoveredPub).toString("hex");
//
// // Authentication Logic (user is logged in?)
// if (userEthereumClient.eth.coinbase === recoveredAddress){
//   console.log("Welcome Back!");
// }
