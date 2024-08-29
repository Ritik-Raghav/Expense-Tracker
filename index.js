const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const desc = event.target.desc.value;
    const category = event.target.category.value;

    const userObj = {
        amount,
        category,
        desc
    }

    localStorage.setItem(userObj.amount, JSON.stringify(userObj));
    showExpenseOnScreen(userObj);
    event.target.reset();
})

function showExpenseOnScreen(userObj) {
    const parentElement = document.querySelector('ul');
    const childElement = document.createElement('li');
    childElement.textContent = userObj.amount + ' - ' + userObj.category + ' - ' + userObj.desc;

    //creating delete-expense button
    const delExp = document.createElement('button');
    delExp.className = 'btn btn-sm btn-danger float-right';
    delExp.textContent = 'Delete Expense';

    //creating delete functionality
    delExp.onclick = () => {
        parentElement.removeChild(childElement);
        localStorage.removeItem(userObj.amount);
    }

    //creating edit-expense button
    const editExp = document.createElement('button');
    editExp.className = 'btn btn-sm btn-warning float-right ml-2';
    editExp.textContent = 'Edit Expense';

    //creating edit functionality
    editExp.onclick = () => {
        const amtToShow = document.querySelector('#amount');
        const descToShow = document.querySelector('#desc');
        const categToShow = document.querySelector('#category');

        amtToShow.value = userObj.amount;
        descToShow.value = userObj.desc;
        categToShow.value = userObj.category;

        parentElement.removeChild(childElement);
        localStorage.removeItem(userObj.amount);
    }

    childElement.appendChild(delExp);
    childElement.appendChild(editExp);
    parentElement.appendChild(childElement);

}