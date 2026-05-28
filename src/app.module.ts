import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      storage: ':localhost:',
      port: 5432,
      username: 'sasa1234',
      password: 'sasa1234',
      database: 'api-nestjs-postgres',
      autoLoadModels: true,
      synchronize: true,
    }),
    ClientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
