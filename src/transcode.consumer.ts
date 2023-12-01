import { Process, Processor } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './common/contants/contants';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);

  @Process()
  async transcode(job: Job<unknown>) {
    this.logger.log(`Transcoding ${job.id} message..`);
    this.logger.debug(job.data);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 8000));
    this.logger.log(`Transcoding complete for ${job.id} message..`);
  }
}
