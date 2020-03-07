import { JsonController, Get } from 'routing-controllers';
import { BaseController } from './BaseController';

@JsonController('/routines')
export class RoutinesController extends BaseController {
  constructor() {
    super();
  }

  @Get()
  routines() {
    return {};
  }
}
