const etherlime = require('etherlime-lib');
const ethers = require('ethers');
const SportsIcon = require('../build/SportsIcon.json');


const deploy = async (network, secret) => {

	const deployer = new etherlime.InfuraPrivateKeyDeployer(secret, network, process.env.API_KEY);
	const name = "ICONS"
	const symbol = "$ICONS"
	const initialSupply = ethers.utils.parseEther("30000000")
	const owner = "0xe42682eEa1DFC432C2fF5a779CD1D9a1e1c7f405"

	const result = await deployer.deploy(SportsIcon, {}, name, symbol, initialSupply, owner);

};

module.exports = {
	deploy
};