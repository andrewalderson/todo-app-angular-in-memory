import {
  InMemoryDbService,
  ParsedRequestUrl,
  RequestInfoUtilities,
} from "angular-in-memory-web-api";
import { TaskList } from "./tasks/tasks.client";
import { User } from "./user/user.client";

export class TodoInMemoryDbService implements InMemoryDbService {
  createDb() {
    const user: User = {
      displayName: "John Doe",
      userPrincipalName: "john.doe@mailinator.com",
    };
    const tasks: TaskList = {
      value: [{ id: "1", title: "This is a test task" }],
    };
    return {
      user,
      tasks,
    };
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    let newUrl = url;
    if (url === "/me") {
      newUrl = "/user";
    }
    return utils.parseRequestUrl(newUrl);
  }
}
