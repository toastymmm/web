import {Injectable} from '@angular/core';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {
  }

  public async getUsers(): Promise<User[]> {
    return [
      {
        username: 'Test',
        created: new Date(),
        lastLogin: new Date(),
        messagesCreated: 0,
        messagesFound: 0,
        warningCount: 0,
        reportCount: 0,
      },
      {
        username: 'Test 2',
        created: new Date(),
        lastLogin: new Date(),
        messagesCreated: 0,
        messagesFound: 0,
        warningCount: 3,
        reportCount: 0,
      }
    ];
  }
}
