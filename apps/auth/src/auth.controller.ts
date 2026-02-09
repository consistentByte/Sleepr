import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { UserDocument } from './users/user.schema';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  // make sure our strategy runs and email, pass are verified before excecuting the route.
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(
    @CurrentUser() user: UserDocument,
    @Res({ passthrough: true }) response: Response,
  ) {
    // passthrough true, since we need to send the JWT as a cookie in the response object instead of passing as plain text.
    // passthorugh makes sure, response is sent, by using the platform specify response handling methods.
    this.authService.login(user, response);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    response.send(user);
  }
}
