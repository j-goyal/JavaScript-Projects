console.log("TODOs List Project");

function getUpdate() {
    let tit = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }

    else {
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);

        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));

    }

    update();
}

function update() {

    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }

    else {
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    // Populate the table
    let tbody = document.getElementById('tbody');
    let html = "";

    itemJsonArray.forEach((element, index) => {

        html += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                    </tr>`
    });

    tbody.innerHTML = html;

}

addToList = document.getElementById('add');
addToList.addEventListener("click", getUpdate);
update();

function deleted(itemIndex) {
    itemJsonArrayStr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    // delete entry from array
    itemJsonArray.splice(itemIndex, 1);

    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));

    update();
}


function clearStorage() {
    if (confirm("Do you areally want to clear?")) {
        console.log('Clearing the storage')
        localStorage.clear();
        update()
    }
}