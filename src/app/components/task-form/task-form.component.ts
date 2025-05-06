import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  taskForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taskService: TaskServiceService
  ) {
    this.taskForm = this.fb.group({
      Title: ['', Validators.required],
      Due_Date: ['', Validators.required],
      Status: ['', Validators.required],
    });
  }

  taskSubmit() {
    if (this.taskForm.valid) {
      console.log('task submitted', this.taskForm.value);
      this.taskService.taskList.push(this.taskForm.value);
      alert('Task Added Successfulluy');
    } else {
      console.log('invalid');
    }
  }

  addNewTask() {
    this.router.navigate(['/addTask']);
  }

  updateTask(){
      this.taskService.updateTask(this.taskForm.value)
      alert("task added")
  }
}
