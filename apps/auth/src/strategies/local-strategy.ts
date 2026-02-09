import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly usersService: UsersService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    // called by our extended passport strategy to see if our user is valid.
    try {
      return this.usersService.verifyUser(email, password);
      // if validating user throws a 404 exception
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
