class TasksFilters {
    constructor() {
        this.filteredTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    getCompetedTasks(filter = "all") {
        if (filter === "completed") return this.filteredTasks.filter(task => task.done);
        if (filter === "uncompleted") return this.filteredTasks.filter(task => !task.done);
        return this.filteredTasks;
    }
}