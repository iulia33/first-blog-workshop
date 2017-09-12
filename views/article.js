window.addEventListener("load",function(){
   
   //always add this listener on views
   
   var articles = new Articles();
   var articleRequest = articles.getArticles();
   articleRequest.then(renderArticle);
   var comments = new Comments();
   
   function renderArticle(){
       var container = document.getElementsByTagName("body")[0];
       
       for (var i = 0; i < 5; i++ ){
           var articleElement = document.createElement("article");
           articleElement.setAttribute("id", i+1);
           //create article title element
           var articleTitleElem = document.createElement("h1");
           articleTitleElem.innerHTML = articles.artArray[i].title;
           //create article body element
           var articleBodyElem = document.createElement("p");
           articleBodyElem.innerHTML = articles.artArray[i].body;
           
           articleElement.appendChild(articleTitleElem);
           articleElement.appendChild(articleBodyElem);
           
           container.appendChild(articleElement);
           var articleId = articles.artArray[i].id;
           
          var commentsRequest = comments.getCommentsForArticle(articleId,articles.artArray[i]);
          commentsRequest.then(renderComments);
           
       }
   }
   function renderComments(){

       for(var i = 0; i< comments.models.length; i++){
           var articleElement = document.getElementsByTagName("article")[i];
         var commentsList = document.createElement("ul");
            articleElement.appendChild(commentsList);
          var articleId = articles.artArray[i].id;
          
          if(articleId == comments.models[i].postId){
               var commentsListItem = document.createElement("li");
               commentsListItem.innerHTML = comments.models[i].body;
               var commentsListItemPrg = document.createElement("p");
               commentsListItemPrg.innerHTML = comments.models[i].name + ", " + comments.models[i].email;
               commentsListItem.appendChild(commentsListItemPrg);        
               commentsList.appendChild(commentsListItem);
               
               
       }
       
   }
   
});