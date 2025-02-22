import { abi, contractAddress } from './constants.js';

const joining = document.getElementById('connect')
joining.addEventListener('click', join);

async function join() {
    if (typeof window.ethereum !== undefined) {
        const account = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });
    }
    try {
        if (typeof window.ethereum !== undefined) {
            const account = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
        }
    } catch (e) {
        console.log(e)
    }
};

window.ethereum.request({
    method: 'eth_accounts'
}).then((accounts) => {
    if (accounts.length > 0) {
        document.querySelector('.connect').innerHTML = 'Connected';
    }
})

async function allProduct() {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        const tx1 = await contract.allProducts()
        tx1.forEach((i) => {
            console.log(i)
            document.getElementById('prod-main').innerHTML =
                `<div>
            <p id="name">name:${i.product_name}</p>
            <p id="description">description:${i.product_description}</p>
            <p id="brand">brand:${i[3]}</p>
        </div>`
        })
    } else {
        console.log('Metamask not found')
    }
}

allProduct()

async function onScanSuccess(decodedText, decodedResult) {
    console.log("Scanned data:", decodedText);
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        const tx1 = await contract.getAll(decodedText)
        console.log(tx1)
            //tx1.wait(1);
        if (tx1) {
            document.getElementById('scanned-data').innerHTML = 'You have been verified,legit product';
        } else {
            document.getElementById('scanned-data').innerHTML = 'You have not been verified,', 'fake product';
        }
    } else {
        console.log('Metamask not found')
    }
}

function onScanError(errorMessage) {
    console.log("Error:", errorMessage);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", {
        fps: 10,
        qrbox: {
            width: 250,
            height: 250
        },
    },
    false
);
html5QrcodeScanner.render(onScanSuccess, onScanError);