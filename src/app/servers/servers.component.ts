import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = true;
  serverCreationStatus: string = 'No server created';
  serverName = "";
  serverCreated: boolean = false;
  servers = ['Test Server 1', 'Test Server 2'];
  maxServers : number = 10; 

  constructor() {}

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.allowNewServers = this.servers.length < this.maxServers;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
}
