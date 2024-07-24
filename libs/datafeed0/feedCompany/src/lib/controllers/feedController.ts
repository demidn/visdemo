import { Controller, Get } from '@nestjs/common';
import { FeedInitialDataUsecase } from '../usecases/feedInitialData.usecase';
import { FeedSingleCompanyDataUsecase } from '../usecases/feedSingleCompanyData.usecase';

@Controller()
export class FeedController {
  constructor(private feedInitialDataUsecase: FeedInitialDataUsecase, private feedSingleCompanyDataUsecase: FeedSingleCompanyDataUsecase) {}

  @Get('/feedInitial')
  feedInitial() {
    this.feedInitialDataUsecase.execute();
    return 'Feed Completed';
  }

  @Get('/updateCompany')
  updateCompany() {
    this.feedSingleCompanyDataUsecase.execute();
    return 'Update Complated';
  }
}
