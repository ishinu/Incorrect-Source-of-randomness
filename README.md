# Incorrect Source of Randomness 

Guess game contract is having a logic which allows user to guess the random number. It is being generated with the help of blockhash of previous block number and block timestamp. Dev, expecting it to be a random number. 

Attack comes in with the same formula to generate the random number and no doubt, it matches since previous block number and timestamp both being same at the time of transaction.

This allows attack to take all the winnings but not the way Dev expected.

## For Testing purpose : 

If you are going to use [Remix IDE](https://remix.ethereum.org/) for testing purpose, blockhash of previous block number may not work. For making it work you need to switch to Ganache cli and how to do that? 

Here are the steps :

- Open terminal and type `npm i -g ganache-cli`
- `npx ganache-cli`

It will give you 10 different accounts with 1000 test ETH each. 

- Go back to Remix IDE, On the left sidebar, selected `Ganache Provider` as the Environment. 
- Select some ETH and deploy your Game contract. 

Now you can test it in Remix!

## For Deploying on public testnet ( Eg. Ropsten ) 

For step by step guide of how to deploy contract on public testnet [Guide](https://github.com/ishinu/Re-Entrancy-Hack-Upgradeable-)

It shall appear like : 

```
Deploying Game contract ...
Game contract deployed at :  0x4D1b823dAa76A37A8F8E6917B69206c5951b1A25
Deploying Attack contract : 
Attack contract deployed at :  0x95D157dA09a47062d7c28aD5eE8573ab4Cf434fB
```

You may test in ours but it's always fun to learn and try it out by yourself! 

