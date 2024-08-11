const apiUrl = 'http://localhost:5000/api/transactions';

async function deposit() {
    const name = document.getElementById('depositName').value;
    const amount = parseFloat(document.getElementById('depositAmount').value);
    
    const response = await fetch(`${apiUrl}/deposit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, amount })
    });
    
    const data = await response.json();
    alert(data.message);
}

async function withdraw() {
    const name = document.getElementById('withdrawName').value;
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    
    const response = await fetch(`${apiUrl}/withdraw`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, amount })
    });
    
    const data = await response.json();
    alert(data.message);
}

async function checkBalance() {
    const name = document.getElementById('balanceName').value;
    
    const response = await fetch(`${apiUrl}/balance/${name}`);
    const data = await response.json();
    
    if (data.balance !== undefined) {
        document.getElementById('balanceResult').textContent = `Balance: Rs. ${data.balance}`;
    } else {
        document.getElementById('balanceResult').textContent = 'Account not found';
    }
}
