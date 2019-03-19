import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Message} from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) {
  }

  public async getMessages(): Promise<Message[]> {
    return [
      {
        text: 'Lorem ispum',
        category: 'Test',
        date: new Date(),
        numReports: 0,
      },
    ];
  }
}
