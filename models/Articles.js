/*global $*/

function Articles(){
    this.artArray = [];
}

Articles.prototype.getArticles = function(){
    var that = this;
    var artUrl = "https://jsonplaceholder.typicode.com/posts";
    
    return $.ajax({
        url:artUrl,
        method:"GET"
    })
    .then (function(response){
        console.log(response);
        articlesList(response);
    })
    .catch(function(error){
        console.log(error);
    })
    
    function articlesList(response){
        for (var i = 0; i < 5; i++){
            var art = new Article(response[i]);
            that.artArray.push(art);
        }
        console.log(that.artArray);
    }
}