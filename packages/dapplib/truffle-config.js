require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food struggle riot situate unknown hockey knife equal gather'; 
let testAccounts = [
"0x526d484f7f79bd3902c23d6f327d102c7d19f572ed1576e9c676d127c0d7e4be",
"0xaab11de934c6ce646a3d5cc05fca1505309d34d281ae7f96d9db865dc88b466d",
"0x0d29659edf5fb66e89f4e53b5667fa8950fdae06a6d3a1ab6c57348cbd51cffc",
"0x7296512ac1268902a978c50541088c3ea3581bd4ab5ab7de837bdd204b0c924c",
"0x61916b4909cb1a87e21020fe8e179c26c74b0d3eb5e57a44e803fada7b3a58bf",
"0xa94568bc71dece061eedc4996c6a65f899c4519999e17806a9967e0fadb1ca2d",
"0x70fc9298058edb3408b725c9bc60a76da0c8d703804457cbacee5d982f0e695b",
"0xfc7fa8eb94499b1eb056ce21f2253dd282f8a1fe7c53916c593dc3eb032cb788",
"0xf11ee2b4da0fba6d83840f45fe99e52e66b4d5b30d80247161055dae9d402b75",
"0xeaab77de2a5466a7fd0ad5e4106e78697299b3f9632ac28cfffbc59554c1ca09"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

