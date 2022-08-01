import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { exec } from 'child_process';

import { AppService } from './app.service';

@Controller()
@ApiTags('Default Routes for Setup, Installation and Documents')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res): string {
    return res.redirect('/documents')
  }

  @Get('setup')
  async setup(): Promise<string> {
    exec("npm run typeorm:migration:generate -d src/migrations")
    return this.appService.setupFinish();
  }

  @Get('install')
  async install(): Promise<string> {
    //await exec("migration run: npx typeorm migration:run -d ./dist/appDataSource.js")
    // npm run typeorm:migration:run -d src/config/migration.config
    return this.appService.installFinish();
  }

  @Get('smartmoles')
  getSmartMoles(@Res() res) {
     return res.redirect('www.smartmoles.com')
  }
}

