import { Controller, Get } from '@nestjs/common';
import { exec } from 'child_process';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('setup')
  async setup(): Promise<string> {
    exec("npm run typeorm:migration:generate -d src/migrations")
    return this.appService.setupFinish();
  }

  @Get('install')
  async install(): Promise<string> {
    //await exec("migration run: npx typeorm migration:run -d ./dist/appDataSource.js")
    return this.appService.installFinish();
  }
}

