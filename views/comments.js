/*global $*/

window.addEventListener("load", function(){
  var comments = new Comments();
   
  var commentsRequest = comments.getCommentsForArticle();
  
  commentsRequest.then(renderComments);
   
  function renderComments(){
       
      var articleElement = document.getElementsByTagName("article")[0];
      var commentsList = document.createElement("ul");
      articleElement.appendChild(commentsList);
       
      for(var i = 0; i< comments.models.length; i++){
           
          var commentsListItem = document.createElement("li");
          commentsListItem.innerHTML = comments.models[i].body;
          var commentsListItemPrg = document.createElement("p");
          commentsListItemPrg.innerHTML = comments.models[i].name + ", " + comments.models[i].email;
          commentsListItem.appendChild(commentsListItemPrg);        
          commentsList.appendChild(commentsListItem);
      }
       
      
  }
});