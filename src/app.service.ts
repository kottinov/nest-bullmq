import { Injectable } from '@nestjs/common';

import { TRANSCODE_QUEUE } from './common/contants/contants';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  public async transcode() {
    await this.transcodeQueue.add({
      fileName: './file.mp3',
    });
  }
}
