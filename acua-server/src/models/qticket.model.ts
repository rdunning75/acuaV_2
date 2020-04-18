import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Qticket extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  tic_id?: number;

  @property({
    type: 'number',
  })
  user_id?: number;

  @property({
    type: 'number',
    required: true,
  })
  loc_id: number;

  @property({
    type: 'number',
  })
  win_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  time_created: string;

  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  reason_of_visit: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // [prop: string]: any;

  constructor(data?: Partial<Qticket>) {
    super(data);
  }
}

export interface QticketRelations {
  // describe navigational properties here
}

export type QticketWithRelations = Qticket & QticketRelations;
