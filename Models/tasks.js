class task{

    constructor(id, title, description, completed = false, createAt = new Date()) {   
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createAt = createAt;

    }
    

}