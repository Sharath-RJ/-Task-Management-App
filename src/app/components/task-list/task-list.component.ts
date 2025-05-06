import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  taskList: any = [];
  constructor(
    private taskServices: TaskServiceService,
    private router: Router
  ) {}
  tasks$ = this.taskServices.tasks$;

  ngOnInit(): void {
    this.taskList = this.taskServices.getCurrentTask();
    console.log("this is task", this.taskList)
  }
  DeleteTask(title: any) {
    this.taskList = this.taskList.filter((i: any) => i.title !== title);
  }

  addNewTask() {
    this.router.navigate(['/addTask']);
  }
}
