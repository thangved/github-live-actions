import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ActionsController } from './actions.controller';

@Module({
  providers: [ActionsService],
  controllers: [ActionsController],
})
export class ActionsModule {}
