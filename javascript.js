let myLibrary = [];

function Book(title, year, pages){ //create object constructor
    this.title = title;
    this.year =  year;
    this.pages = pages;
    isRead = false;
}
document.getElementById('btn').addEventListener('click', addBookToLibrary);


function addBookToLibrary(ev){ //add object to array and display on screen
    ev.preventDefault(); //stops form from submitting when button is pushed
    
    //instantiate Book object
    const book1 = new Book(document.getElementById('title').value,
    document.getElementById('year').value, 
    document.getElementById('pages').value);
    

    myLibrary.push(book1);
    document.querySelector('form').reset();//clear out form after clicking button

    console.log(myLibrary);

    //display objects on the screen
    //let pre = document.querySelector('#msg pre');
    //pre.textContent = '\n' + JSON.stringify(myLibrary, '\t', 2);

    //display objects on screen using a table
    let k = '<tbody>';
    

    for(let i = 0; i < myLibrary.length;i++){
        k += '<tr>';
        k += '<td>' + myLibrary[i].title + '</td>';
        k += '<td>' + myLibrary[i].year + '</td>';
        k += '<td>' + myLibrary[i].pages + '</td>';
        k += '<td>' + '<input type = "button" value = "Delete Row" onclick= "DeleteRow(); DeleteObject()" > ' + '</td>';
        k += '<tr>';
    }

    k += '</tbody>';
   
    document.getElementById("tableData").innerHTML = k;
}

function DeleteRow(){ //borrowed from stack overflow
    let td = event.target.parentNode;
    let tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

function DeleteObject(){
    for (let i = 0; i < myLibrary.length; i++){
        myLibrary.splice(i,1);
    }
    return myLibrary;
}

