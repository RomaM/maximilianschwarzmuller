import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 5;

  serverElements = [
    {type: 'server', name: 'TestServer', content: 'TestServer Content'}
    ];

  onSayHiEvent(data: {sayHiData: string}) {
    console.log(data.sayHiData);
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onServerDeleted(serverData: {serverName: string}) {
    this.serverElements = this.serverElements.filter( item =>
      item.name !== serverData.serverName);
  }

  onBluePrintDeleted(serverData: {serverName: string}) {
    this.serverElements = this.serverElements.filter( item =>
      item.name !== serverData.serverName);
  }

}
