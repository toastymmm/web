import {Component, OnInit} from '@angular/core';
import {ModalDialogService} from '../modals/dialog.service';
import {MessagesService} from './messages.service';
import {Message} from './message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messagesService: MessagesService, private modalService: ModalDialogService) {

  }

  async ngOnInit() {
    this.messages = await this.messagesService.getMessages();
  }
}
