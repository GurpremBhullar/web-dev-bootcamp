let transactions = [];
let gurpChart;

fetch("/api/transaction")
  .then(response => {
    return response.json();
  })
  .then(data => {

    transactions = data;

    getTotal();
    getTable();
    getChart();
  });

function getTotal() {

  let total = transactions.reduce((total, t) => {
    return total + parseInt(t.value);
  }, 0);

  let totalGl = document.querySelector("#total");
  totalEl.textContent = total;
}

function getTable() {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";

  transactions.forEach(transaction => {

    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${transaction.name}</td>
      <td>${transaction.value}</td>
    `;

    tbody.appendChild(tr);
  });
}

function getChart() {

  let reversed = transactions.slice().reverse();
  let sum = 0;

  let labels = reversed.map(t => {
    let date = new Date(t.date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  });

  let data = reversed.map(t => {
    sum += parseInt(t.value);
    return sum;
  });

  if (myChart) {
    myChart.destroy();
  }

  let ctx = document.getElementById("myChart").getContext("2d");

  gurpChart = new Chart(ctx, {
    type: 'line',
      data: {
        labels,
        datasets: [{
            label: "Total Time",
            fill: true,
            backgroundColor: "#6666ff",
            data
        }]
    }
  });
}

function sendTransaction(isAdding) {
  let nameGl = document.querySelector("#t-name");
  let amountGl = document.querySelector("#t-amount");
  let errorGl = document.querySelector(".form .error");

  
  if (nameGl.value === "" || amountGl.value === "") {
    errorGl.textContent = "Need More Info";
    return;
  }
  else {
    errorGl.textContent = "";
  }

  
  let transaction = {
    name: nameGl.value,
    value: amountGl.value,
    date: new Date().toISOString()
  };

  
  if (!isAdding) {
    transaction.value *= -1;
  }

  
  transactions.unshift(transaction);

  
  getChart();
  getTable();
  getTotal();
  
  
  fetch("/api/transaction", {
    method: "POST",
    body: JSON.stringify(transaction),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  })
  .then(response => {    
    return response.json();
  })
  .then(data => {
    if (data.errors) {
      errorGl.textContent = "need more info";
    }
    else {
      
      nameGl.value = "";
      amountGl.value = "";
    }
  })
  .catch(err => {
   
    saveRecord(transaction);

    
    nameGl.value = "";
    amountGl.value = "";
  });
}

document.querySelector("#add-btn").onclick = function() {
  sendTransaction(true);
};

document.querySelector("#sub-btn").onclick = function() {
  sendTransaction(false);
};