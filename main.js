let myLibrary = [];
//let numberOfBook=-1;
const titleTextElement=document.querySelector("#title");
const authorTextElement=document.querySelector("#author");
const pagesTextElement=document.querySelector("#pages");
const addButtonTextElement=document.querySelector("#addButton");
const readTextElement=document.querySelector("#read");
const tbody=document.querySelector("tbody");

clear();
function clear(){
    titleTextElement.value="";
    authorTextElement.value="";
    pagesTextElement.value="";
}
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookTolibrary(title, author, pages, read) {
    let book=new Book(title, author, pages, read);
    myLibrary.push(book);
    console.table(myLibrary);
    //numberOfBook++;
    addBookToHtml(title, author, pages, read);
}
function addBookToHtml(title, author, pages, read){
    let tr=document.createElement('tr');
    tbody.appendChild(tr);

    //let tdTitle=title;
    let tdTitle=document.createElement('td');
    tdTitle.textContent=title;
    tr.appendChild(tdTitle);

    let tdAuthor=document.createElement('td');
    tdAuthor.textContent=author;
    tr.appendChild(tdAuthor);

    let tdPages=document.createElement('td');
    tdPages.textContent=pages;
    tr.appendChild(tdPages);

    let tdRead=document.createElement('td');
    if(read=="true"){
        tdRead.textContent="Have read";
    }else{
        tdRead.textContent="Haven't read";
    }
    
    tr.appendChild(tdRead);

    let buttonContainerTd=document.createElement('td');
    let deleteButton=document.createElement('button');
    let img=document.createElement('img');
    deleteButton.classList.add("deleteBtn");
    deleteButton.appendChild(img);
    buttonContainerTd.appendChild(deleteButton);
    deleteButton.addEventListener("click",deleteRow)
    tr.appendChild(buttonContainerTd);

    clear();
}
function deleteRow(e){
    this.parentNode.parentNode.remove();
    clear();
}
function validateForm(){
    if(titleTextElement.value==""||authorTextElement.value==""||pagesTextElement.value==""){
        if(titleTextElement.value==""){
            titleTextElement.placeholder="Please fill in Title!";
            console.log("bent");
        } 
        if(authorTextElement.value==""){
            authorTextElement.placeholder="Please fill in Author!";
            console.log("bent");
        } 
        if(pagesTextElement.value==""){
            pagesTextElement.placeholder="Please fill in Pages!";
            console.log("bent");
            
        }
        return;
    }
    else if(isNaN(pagesTextElement.value)||parseInt(pagesTextElement.value)<0){
        pagesTextElement.value="";
        pagesTextElement.placeholder="Please write a positive integer";
        return;
    }
    addBookTolibrary(titleTextElement.value,authorTextElement.value,pagesTextElement.value,readTextElement.value)

}
/*addBookTolibrary("kl","béla","256",true);
console.log(myLibrary);*/



addButtonTextElement.addEventListener("click",validateForm);
readTextElement.addEventListener("change",function(){
    if(this.checked){
        readTextElement.value=true;
    }
    else{
        read.TextElementvalue=false;
    }
    console.log(read.value)
});