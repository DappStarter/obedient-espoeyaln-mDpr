require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remain purpose idea kite furnace seminar'; 
let testAccounts = [
"0x626b6ea23f411e61fa0c34c3b75754b716075b876f81d665c9aff8fb92e716ba",
"0x9565e74f93dc91e0322f789e608bc43932e1e9e7dd0aec913607b9dc4be6918d",
"0x9a14e0828d998d5af97ef2beab8dc94beeaa4a948282d0fa0a9937b7904c17c7",
"0x62aa253eb64292cbba6398316a1652a2f86cfc35f04911c9f7de38578afc036d",
"0xe5724524e194a24c16b4367bd8f89ddc148e68ca58cd2f126be3cf2ea0f854b0",
"0x503d80c0bda32359af30ac0d197ef1a4b886cb24bf284d2fd2a01d651e2a5dd5",
"0xacba3ecc5da6539e6c860199abe3033aec060894687f6b9c3118a2fee4a36920",
"0xe911028d6df2290f8b0cdf8bb14034a93ca0d51e9a247c0e54fbcd07baaf3b3e",
"0x4fd9b785c68e00ee5c59462e6851b62b8a9126de55131b96bd7cde346afe13a3",
"0xad6eb3060aa4737b6a2ac8f3a76a857a4764052f94cf273fbba9cd330128a39e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

