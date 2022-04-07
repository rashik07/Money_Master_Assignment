function monthlyCost(calculate) {

    const incomeBalance = document.getElementById("income-balance");
    const incomeAmount = parseFloat(incomeBalance.value);

    const foodExpence = document.getElementById("food-expense");
    const foodAmount = parseFloat(foodExpence.value);
    const rentExpence = document.getElementById("rent-expense");
    const rentAmount = parseFloat(rentExpence.value);
    const clothesExpence = document.getElementById("clothes-expense");
    const clothesAmount = parseFloat(clothesExpence.value);
    //calculate total expenses
    if (calculate) {
        const totalExpence = document.getElementById("total-expence");
        if (foodAmount >= 0 && rentAmount >= 0 && clothesAmount >= 0 && incomeAmount >= 0) {
            totalExpence.innerText = foodAmount + rentAmount + clothesAmount;
        }
        else {
            alert("please enter positive number");
        }
        //calculate balance

        const totalBalance = document.getElementById("total-balance");
        if (foodAmount >= 0 && rentAmount >= 0 && clothesAmount >= 0 && incomeAmount >= 0) {
            const totalCalculation = incomeAmount - totalExpence.innerText;
            if (totalCalculation >= 0) {
                totalBalance.innerText = totalCalculation;
            }
            else {
                alert("Balance is negetive, please input correctly");
            }

        }
        else {
            alert("please enter positive number");

        }

    }
    else {
        const saveInput = document.getElementById("save-input").value;
        const saveAmount = (incomeAmount * parseFloat(saveInput)) / 100;
        document.getElementById("saving-amount").innerText = saveAmount;
        const remainingCalculation = incomeAmount - (foodAmount + rentAmount + clothesAmount + saveAmount);
        if(remainingCalculation>=0){
            document.getElementById("Remaining-balance").innerText = remainingCalculation;
        }
        else{
            alert("Remaining balance is negetive, please input correctly");
        }
        



    }

}


document.getElementById("calculate-btn").addEventListener("click", function () {

    monthlyCost(true);
})

document.getElementById("save-btn").addEventListener("click", function () {

    monthlyCost(false);
})
