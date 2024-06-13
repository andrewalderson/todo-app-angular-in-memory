import {
  InMemoryDbService,
  ParsedRequestUrl,
  RequestInfoUtilities,
} from "angular-in-memory-web-api";
import { User } from "./user/user.client";

export class TodoInMemoryDbService implements InMemoryDbService {
  createDb() {
    const user: User = {
      displayName: "John Doe",
      userPrincipalName: "john.doe@mailinator.com",
    };
    return {
      user,
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
