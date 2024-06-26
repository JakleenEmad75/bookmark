var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("tableContent");
var deleteBtns;
var bookmarks = [];
if(localStorage.getItem("sitesContainer") !==null){
  bookmarks= JSON.parse(localStorage.getItem("sitesContainer"));
  displayData();
}



function addBookmark(){
   if(validationName() ==true && validationUrl() ==true  ){
    var bookmark={
      name:siteName.value,
      url:siteURL.value,

  }
 bookmarks.push(bookmark);
 localStorage.setItem("sitesContainer" ,JSON.stringify(bookmarks) )
 displayData();
 clearInput();

   }



}

function clearInput(){
    name:siteName.value= null;
    url:siteURL.value= null;
}

function displayData(){
    var cartona="";
    for(var x =0 ; x<bookmarks.length ; x++){
       cartona+=`
       <tr>
       <td>${x+1}</td>
       <td>${bookmarks[x].name}</td>
       <td>
       <a href="${bookmarks[x].url}"> <button class="my-btn btn-visit py-2">
       <i class="fa-regular fa-eye"></i>
       Visit

     </button></a>
        
       </td>
       <td>
         <button onclick=" deletSite(${x})" class=" my-bt btn-delete py-2 ">
           <span class="bg-color"> <i class="fa-regular fa-trash-can"></i></span>
            Delete

          </button>
       </td>
     </tr>


       `
       
       
    }
    document.getElementById("tableContent").innerHTML=cartona


}


function validationName(){
    var text= siteName.value;
    var regexName= /^[A-Za-z]{1,9}$/;
    var msgName= document.getElementById("msName")
    if(regexName.test(text)==true){
        siteName.classList.add('is-valid')
        siteName.classList.remove('is-invalid')
        msgName.classList.add('d-none')
        return true;

    }
    else{
        siteName.classList.remove('is-valid')
        siteName.classList.add('is-invalid')
        msgName.classList.remove('d-none')
    }
}

function validationUrl(){
   var textUr= siteURL.value;
   var regexUrl= /^(www\.)?(https:\/\/)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/
   var msgUrl= document.getElementById("msUrl")

   if(regexUrl.test(textUr)==true){
    siteURL.classList.add('is-valid')
    siteURL.classList.remove('is-invalid')
    msgUrl.classList.add('d-none')
    return true;
   }

   else{
    siteURL.classList.add('is-invalid')
    siteURL.classList.remove('is-valid')
    msgUrl.classList.remove('d-none')

   }
   



}


function deletSite(indexItem){
  bookmarks.splice(indexItem,1)
   localStorage.setItem("sitesContainer" ,JSON.stringify(bookmarks) )
   displayData();
  
console.log( bookmarks)
}


