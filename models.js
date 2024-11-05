class Task {
    constructor(title, discription) {
        this.id = Date.now();
        this.title = title;
        this.discription = discription;
        this.done = false;
        this.date = new Date();
    }
}