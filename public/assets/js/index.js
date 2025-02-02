import { abi, contractAddress } from './constants';

const scanner = document.getElementById.innerHTML
const scanned = document.getElementById('scanned');
async function verify(scanned_data) {
    try {
        if (typeof window !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(contractAddress, abi, signer)
            const tx = await contract.verify(scanned_data)
            const receipt = await tx.wait(1);
            if (receipt.events && receipt.events.length > 0) {
                scanned.innerHTML = "Verification successful,real product";
            } else {
                console.log('No events found in transaction receipt.');
                scanned.innerHTML = "Verification fail,fake product";
            }
        }
    } catch (error) {
        console.log(error)
    }
}

verify(scanner);