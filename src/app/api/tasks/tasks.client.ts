import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

export type Task = {
  id: string;
  title: string;
};

export type TaskList = {
  value: Task[];
};

@Injectable({ providedIn: "root" })
export class TasksClient {
  #httpClient = inject(HttpClient);

  getTasks() {
    return this.#httpClient.get<TaskList>(`/tasks`);
  }
}
