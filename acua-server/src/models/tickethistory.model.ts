import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tickethistory extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
    generated: true,
  })
  tic_id: number;

  @property({
    type: 'number',
    required: true,
  })
  user_id: number;

  @property({
    type: 'number',
    required: true,
  })
  loc_id: number;

  @property({
    type: 'number',
    required: true,
  })
  win_id: number;

  @property({
    type: 'string',
    required: true,
  })
  time_created: string;

  @property({
    type: 'string',
  })
  time_serviced?: string;

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
  reason_of_visit: string;

  @property({
    type: 'string',
  })
  user_note?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tickethistory>) {
    super(data);
  }
}

export interface TickethistoryRelations {
  // describe navigational properties here
}

export type TickethistoryWithRelations = Tickethistory & TickethistoryRelations;
