


document.getElementById("update-btn").addEventListener("click",function(){
    // console.log("button is clicked")
    const updateTitle = document.getElementById("title");
   

    updateTitle.innerText = "My First Website Title With JavaScript";
})



document.getElementById("update-name-btn").addEventListener('click',function(){
    

    const inputName = document.getElementById('input-name');
       const name = inputName.value;
       

      const nameHeading =  document.getElementById('name-heading');

       nameHeading.innerText = name;
        
})