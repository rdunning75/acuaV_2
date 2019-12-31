import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TicketHistory extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
    generated: true,
  })
  tic_iid: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  user_id: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  loc_id: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  win_id: number;

  @property({
    type: 'any',
    required: true,
  })
      // tslint:disable-next-line:no-any
  time_created: any;

  @property({
    type:'any',
    required: true,
  })
      // tslint:disable-next-line:no-any
  time_serviced: any;

  @property({
    type: 'boolean',
  })
  serviced?: boolean;

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
  })
  reason_of_vist?: string;

  @property({
    type: 'string',
  })
  user_note?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // tslint:disable-next-line:no-any
  [prop: string]: any;

  constructor(data?: Partial<TicketHistory>) {
    super(data);
  }
}

export interface TicketHistoryRelations {
  // describe navigational properties here
}

export type TicketHistoryWithRelations = TicketHistory & TicketHistoryRelations;
