import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TodoInMemoryDbService implements InMemoryDbService {
    createDb() {
        return {};
    }
}