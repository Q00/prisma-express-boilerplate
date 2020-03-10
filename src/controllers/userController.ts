import { BaseController } from './BaseController';
import { JsonController, Get } from 'routing-controllers';
import { UserService } from '../services/userService';

@JsonController('/user')
export class UserController extends BaseController {
  constructor(private userService: UserService) {
    super();
  }

  @Get()
  async users() {
    const users = await this.userService.getUsers();
    return users;
  }
}
