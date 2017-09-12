/*global $*/

function Comments(){
    this.models = [];
}

Comments.prototype.getCommentsForArticle = function(articleId){
    var that = this;
    var commentsUrl = "https://jsonplaceholder.typicode.com" + "/posts/" + articleId + "/comments";
    
    return $.ajax({
        url:commentsUrl,
        method: "GET"})
        .then(function(response){
            console.log(response);
            commentsList(articleId,response);
        })
        .catch(function(error){
            console.log(error);
        })
   
        function commentsList(articleId,response){
           for (var i = 0; i<response.length; i++){
                var comm = new Comment(articleId,response[i]);
                that.models.push(comm); 
        }
        console.log(that.models);
        
        }
}