import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigModule, ApiConfigService } from '@xemida/api-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiCompanyModule } from '@xemida/api-company';
import { ApiSignalsModule } from '@xemida/api-signals';

const onlyFakeApi = process.env['ONLY_FAKE_API'] === 'true';
const typeOrmOrEmpty = onlyFakeApi
  ? []
  : [
      TypeOrmModule.forRootAsync({
        imports: [ApiConfigModule],
        useFactory: (configService: ApiConfigService) => configService.typeOrmConfig,
        inject: [ApiConfigService],
      }),
    ];

@Module({
  imports: [ConfigModule.forRoot(), ApiConfigModule, ApiCompanyModule, ApiSignalsModule, ...typeOrmOrEmpty],
  providers: [],
})
export class AppModule {}
