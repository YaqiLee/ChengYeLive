import { OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class EventsGateway implements OnGatewayConnection {

  @WebSocketServer() server;
  handleConnection(client: any, ...args: any[]) {
    this.server.emit('users', "wang");
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log("message");
    
    return 'Hello world!';
  }

  @SubscribeMessage('events')
  handleEvent(client: any, payload: any): string {
    return 'Hello world!';
  }
}
