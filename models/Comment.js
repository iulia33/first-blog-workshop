function Comment(articleId,defaultData){
    defaultData = defaultData || {};
    
    this.postId = defaultData.postId;
    this.id = defaultData.id;
    this.name = defaultData.name;
    this.email = defaultData.name;
    this.body = defaultData.body;
}

