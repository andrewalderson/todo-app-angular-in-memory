import { Injectable, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";
import { TasksClient } from "../../../api/tasks/tasks.client";

export type Task = {
  id: string;
  title: string;
};

@Injectable({ providedIn: "root" })
export class TasksStore {
  #tasksClient = inject(TasksClient);

  readonly tasks = toSignal(
    this.#tasksClient.getTasks().pipe(map((tasks) => tasks.value)),
    { initialValue: [] }
  );
}
