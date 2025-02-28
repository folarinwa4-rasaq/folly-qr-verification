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

export async function verify() {
    const productname = document.getElementById('name').value
    const productbrand = document.getElementById('brand').value
    const description = document.getElementById('description').value
    const qrinformation = document.getElementById('qr').value
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        const tx2 = await contract.store(productname, productbrand, description, qrinformation)
        await tx2.wait()
        console.log(tx2)
        alert('Product Stored Successfully!')
        setTimeout(() => {
            window.location.href = '/'
        }, 5000)
    } else {
        console.log('no wallet')
    }
}
const submit = document.getElementById('submit')
submit.addEventListener('click', verify);