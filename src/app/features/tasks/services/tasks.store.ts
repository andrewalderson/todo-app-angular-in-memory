import { Injectable, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";
import { TasksClient } from "../../../api/tasks/tasks.client";

@Injectable({ providedIn: "root" })
export class TasksStore {
  #tasksClient = inject(TasksClient);

  readonly tasks = toSignal(
    this.#tasksClient.getTasks().pipe(map((tasks) => tasks.value)),
    { initialValue: [] }
  );
}
