import {
  Controller,
  Get,
  Query,
  Post,
  Param,
  Body,
  // Res,
  // Req,
  Request,
  Response,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/query')
  getQury(@Query() query): string {
    return query;
  }

  @Post('/queryName')
  getQuryByName(@Query('name') query): string {
    return query;
  }
  @Post('/Param/:id')
  getPrams(@Param() parmas): string {
    return parmas;
  }
  @Post('/body')
  getBody(@Body() body) {
    return body;
  }
  @Post('/request')
  geRes(@Request() req, @Response() res) {
    res.status(200).send(req.body);
  }
}
