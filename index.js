document.getElementById('submit').addEventListener('click', () => {  //takes our submit button, listens for the click, and executes the function 
    let table = document.getElementById('table');  //grabs our HTML table and turns into JS var table
    let row = table.insertRow(1); //creates row var to insert our data

    row.insertCell(0).innerHTML = document.getElementById('product-name').value;  //grabs input value for product name 
    row.insertCell(1).innerHTML = document.getElementById('product#').value;   //grabs input value for product number 
    row.insertCell(2).innerHTML = document.getElementById('sales').value - document.getElementById('cogs').value; //grabs cogs value and subtracts it from sales value
    row.insertCell(3).innerHTML = document.getElementById('customer-rate').value; //grabs customer rating input

    document.getElementById('product-name').value = '';  //clears product name form
    document.getElementById('product#').value = '';  //clears product number form
    document.getElementById('cogs').value = '';  //clears cogs form
    document.getElementById('sales').value = '';  //clears sales form 
    document.getElementById('customer-rate').value = 'Choose'; //clears customer rating form
});



    



