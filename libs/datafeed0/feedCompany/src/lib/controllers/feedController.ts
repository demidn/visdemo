import { Controller, Get } from '@nestjs/common';
import { FeedInitialDataUsecase } from '../usecases/feedInitialData.usecase';

@Controller()
export class FeedController {
  constructor(private feedInitialDataUsecase: FeedInitialDataUsecase) {}

  saveOrUpdateFeed() {

    return 'saveOrUpdateFeed';
  }

  @Get('/feedInitial')
  feedInitial() {
    this.feedInitialDataUsecase.execute();
    return 'getFeeds';
  }
}
