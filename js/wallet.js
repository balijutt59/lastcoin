// BNB/EVM Wallet Connect
async function connectBNB() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            alert('Connected BNB/EVM Wallet: ' + accounts[0]);
        } catch (err) {
            alert('Connection failed: ' + err.message);
        }
    } else {
        alert('MetaMask not found!');
    }
}

// Solana Wallet Connect (Phantom)
async function connectSolana() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const resp = await window.solana.connect();
            alert('Connected Solana Wallet: ' + resp.publicKey.toString());
        } catch (err) {
            alert('Connection failed: ' + err.message);
        }
    } else {
        alert('Phantom Wallet not found!');
    }
}

// Buy Coins
function buyCoins() {
    let coinAmount = document.getElementById('coinAmount').value;
    if (coinAmount <= 0) {
        alert('Enter a valid number of coins');
        return;
    }

    let tokenAmount = coinAmount * 0.5; // 1 coin = 0.5 token
    let usdValue = tokenAmount * 0.3;   // 1 token = $0.30

    alert(`You bought ${coinAmount} coin(s) = ${tokenAmount} token(s) ≈ $${usdValue.toFixed(2)}`);
    // Future: send crypto to your wallet
}
