import { Controller, Get } from '@nestjs/common';
import { WSService } from './socket-client';

@Controller('socket')
export class SocketController {

  constructor(private readonly wsService: WSService) { }

  @Get()
  getCandleData() {
    return this.wsService.returnBinanceData();
  }
}
