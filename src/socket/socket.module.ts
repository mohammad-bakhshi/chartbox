import { Module } from '@nestjs/common';
import { WSService } from './socket-client';
import { SocketController } from './socket.controller';

@Module({
  providers: [WSService],
  exports: [WSService],
  controllers: [SocketController]
})
export class SocketModule { }
