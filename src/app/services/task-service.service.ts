import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor() {}

  taskLists:any = new BehaviorSubject([]);
  tasks$ = this.taskLists.asObservable();

  updateTask(task: any) {
    const currentTask = this.taskLists.getValue();
    console.log("task", task)
    console.log("Current task", currentTask)
    this.taskLists.next([
      ...currentTask,
       task,
    ]);
  }


 
  getCurrentTask(): any {
    return this.taskLists.getValue();
  }

  taskList: any = [];
}
