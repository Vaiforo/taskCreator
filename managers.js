class TasksManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask(title, discription) {
        this.tasks.push(new Task(title, discription));
        this.saveToLocalStorage();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    editTask(id, newTitle, newDiscription) {
        let task = this.tasks.find(task => task.id === id);
        if (task) {
            task.title = newTitle;
            task.discription = newDiscription;
            this.saveToLocalStorage();
        }
    }

    taskCompleted(id) {
        let task = this.tasks.find(task => task.id === id);
        if (task) {
            task.done = true;
            this.saveToLocalStorage();
        }
    }
}
