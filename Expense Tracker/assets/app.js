const addBtn = document.querySelector(".add");

const log = [];

const renderLog = () => {
  const list = document.querySelector(".list");
  list.innerHTML = ``;
  let totalBalance = 0.0;
  let totalIncome = 0.0;
  let totalExpense = 0.0;

  log.forEach(p => {
    const li = document.createElement("li");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    div1.textContent = p.text;
    div2.textContent = p.amount;
    div1.classList.add("info");
    div2.classList.add("amnt");
    if (p.amount > 0) li.classList.add("border-right-green");
    else li.classList.add("border-right-red");
    li.append(div1, div2);
    list.appendChild(li);
    if (p.amount >= 0) {
      totalBalance +=parseFloat(p.amount);
      totalIncome += parseFloat(p.amount);
    } else {
      totalBalance += parseFloat(p.amount);
      totalExpense += -1*parseFloat(p.amount);
    }
  });
  document.querySelector("#total-balance").textContent = totalBalance;
  document.querySelector("#total-income").textContent = totalIncome;
  document.querySelector("#total-expense").textContent = totalExpense;
};

const addBtnHandler = () => {

  const text = document.getElementById("text").value;
  const amount = document.getElementById("amount").value;
  console.log(amount)
  if(text.trim() === '' || isNaN(amount) || amount === '')
  {
    document.getElementById("text").value='';
    document.getElementById("amount").value=''
      alert('invalid input');

      return;
  }
  const newHistoy = {
    text,
    amount
  };
  log.push(newHistoy);
  renderLog();
};

addBtn.addEventListener("click", addBtnHandler);
