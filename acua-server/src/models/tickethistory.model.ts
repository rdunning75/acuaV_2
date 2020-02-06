import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
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
    type: 'number',
    required: true,
  })
  queue_index: number;

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
  })
  last_name?: string;

  @property({
    type: 'string',
    required: true,
  })
  reason_of_visit: string;

  @property({
    type: 'string',
  })
  user_note?: string;

  @property({
    type: 'string',
    required: true,
  })
  is_striked: string;


  constructor(data?: Partial<Tickethistory>) {
    super(data);
  }
}

export interface TickethistoryRelations {
  // describe navigational properties here
}

export type TickethistoryWithRelations = Tickethistory & TickethistoryRelations;
