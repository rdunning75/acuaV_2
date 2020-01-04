import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class TicketHistory extends Entity {
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
    required: true,
  })
  time_serviced: string;

  @property({
    type: 'boolean',
    required: true,
  })
  serviced: boolean;

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
  user_notes?: string;


  constructor(data?: Partial<TicketHistory>) {
    super(data);
  }
}

export interface TicketHistoryRelations {
  // describe navigational properties here
}

export type TicketHistoryWithRelations = TicketHistory & TicketHistoryRelations;
