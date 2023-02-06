// socket-client.ts
import { Injectable } from "@nestjs/common";
import * as WebSocket from "ws";

@Injectable()
export class WSService {
  // wss://echo.websocket.org is a test websocket server
  private ws = new WebSocket("wss://data-stream.binance.com/ws");

  private result: Object[];

  constructor() {

    this.ws.on("open", () => {
      this.send(JSON.stringify({
        "method": "SUBSCRIBE",
        "params":
          [
            "btcusdt@kline_1m"
          ],
        "id": 1
      }))
    });

    const answer = []

    this.ws.on('message', function message(data, isBinary) {
      const message = isBinary ? data : data.toString();
      if (typeof message === 'string') {
        const formatedData = JSON.parse(message);
        if (!formatedData.id) {
          answer.push(formatedData);
        }
      }
    });

    this.result = answer;

  }

  send(data: string) {
    this.ws.send(data)
  }

  returnBinanceData() {
    return this.result;
  }
}