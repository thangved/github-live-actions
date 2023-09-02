import { Module } from '@nestjs/common';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [ActionsModule],
})
export class AppModule {}
