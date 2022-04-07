function monthlyCost(){
    
    const incomeBalance = document.getElementById("income-balance");
    const incomeAmount = parseFloat(incomeBalance.value);
    
    const foodExpence= document.getElementById("food-expense");
    const foodAmount= parseFloat(foodExpence.value);
    const rentExpence= document.getElementById("rent-expense");
    const rentAmount= parseFloat(rentExpence.value);
    const clothesExpence= document.getElementById("clothes-expense");
    const clothesAmount= parseFloat(clothesExpence.value);
    //calculate total expenses
    const totalExpence = document.getElementById("total-expence");
    if(foodAmount>0 && rentAmount>0 && clothesAmount>0 && incomeAmount>0 ){
    totalExpence.innerText=foodAmount + rentAmount +clothesAmount;
    }
    else {
        alert("please enter positive number");
    }
    //calculate balance
    
    const totalBalance = document.getElementById("total-balance");
    if(foodAmount>0 && rentAmount>0 && clothesAmount>0 && incomeAmount>0){
    totalBalance.innerText= incomeAmount-totalExpence.innerText;
    }
    else {
        alert("please enter positive number");

    }
}


document.getElementById("calculate-btn").addEventListener("click",function(){
  
    monthlyCost();
})