const { ethers } = require("hardhat");

async function main(){
    console.log("Deploying Game contract ...");
    const Game = await ethers.getContractFactory("Game");
    const game = await Game.deploy();
    await game.deployed();
    console.log("Game contract deployed at : ",game.address);

    console.log("Deploying Attack contract : ");
    const Attack = await ethers.getContractFactory("Attack");
    const attack = await Attack.deploy(game.address);
    await attack.deployed();
    console.log("Attack contract deployed at : ",attack.address);
}

main();