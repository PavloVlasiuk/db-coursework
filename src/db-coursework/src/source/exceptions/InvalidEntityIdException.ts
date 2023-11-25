import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidEntityIdException extends HttpException {
  constructor(entity: string) {
    super(`${entity} with such id does not exist`, HttpStatus.NOT_FOUND);
  }
}
