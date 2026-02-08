import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateReservationDto extends PartialType(CreateReservationDto) {}
