    document.getElementById('comment-btn').addEventListener('click',function(){
        // console.log("button is clicked");
              const inputValue = document.getElementById('comment-box');

      const newComment = inputValue.value;
      


      const commentArea = document.getElementById('comment-area');
       


       const newElement = document.createElement('p');
         newElement.classList.add('comment');
       newElement.innerText = newComment;


       commentArea.appendChild(newElement);


       inputValue.value = '';
    




      })
