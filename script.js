const calculateButton = document.querySelector('#calculate');
const resultDiv = document.querySelector('#result');

function calculate() {
	const age = parseInt(document.querySelector('#age').value);
	const gender = document.querySelector('#gender').value;
	const weight = parseInt(document.querySelector('#weight').value);
	const height = parseInt(document.querySelector('#height').value);
	const med1 = document.querySelector('#med1').checked;
	const med2 = document.querySelector('#med2').checked;
	const med3 = document.querySelector('#med3').checked;}
// Import the necessary libraries and modules
const Web3 = require('web3');
const contractABI = require('./contractABI.json');

// Set up the Web3 provider and contract address
const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);
const contractAddress = '0x123456789abcdef123456789abcdef123456789';

// Create a new instance of the contract
const supplyChainContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to handle the form submission
function submitForm(event) {
	event.preventDefault();

	// Get the input values
	const productName = document.getElementById('product_name').value;
	const manufacturer = document.getElementById('manufacturer').value;
	const productionDate = document.getElementById('production_date').value;
	const expirationDate = document.getElementById('expiration_date').value;
	const batchNumber = document.getElementById('batch_number').value;
	const quantity = document.getElementById('quantity').value;

	// Call the smart contract function to add the product to the blockchain
	supplyChainContract.methods.addProduct(productName, manufacturer, productionDate, expirationDate, batchNumber, quantity)
	.send({from: web3.eth.accounts[0]})
	.then(function(receipt) {
		console.log(receipt);
	})
	.catch(function(error) {
		console.log(error);
	});
}

// Add an event listener to the form submit button
document.getElementById('submit').addEventListener('click', submitForm);
