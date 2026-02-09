import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from '../users/user.schema';

const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  // we are getting user document here, since in our auth controller
  // in our LocalStrategy in validate call, we verify and return the user, so whatever gets returned from LocalStrategy.validate, gets automatically added to the request object as user property.
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
