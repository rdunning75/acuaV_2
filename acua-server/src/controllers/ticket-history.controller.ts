import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {TicketHistory} from '../models';
import {TicketHistoryRepository} from '../repositories';

export class TicketHistoryController {
  constructor(
    @repository(TicketHistoryRepository)
    public ticketHistoryRepository : TicketHistoryRepository,
  ) {}

  @post('/ticket-histories', {
    responses: {
      '200': {
        description: 'TicketHistory model instance',
        content: {'application/json': {schema: getModelSchemaRef(TicketHistory)}},
      },
    },
  })
  async create(@requestBody()ticketHistory: Omit<TicketHistory, 'id'>,): Promise<TicketHistory> {
    return this.ticketHistoryRepository.create(ticketHistory);
  }

  @get('/ticket-histories/count', {
    responses: {
      '200': {
        description: 'TicketHistory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(TicketHistory)) where?: Where<TicketHistory>,
  ): Promise<Count> {
    return this.ticketHistoryRepository.count(where);
  }

  @get('/ticket-histories', {
    responses: {
      '200': {
        description: 'Array of TicketHistory model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TicketHistory)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(TicketHistory)) filter?: Filter<TicketHistory>,
  ): Promise<TicketHistory[]> {
    return this.ticketHistoryRepository.find(filter);
  }

  @patch('/ticket-histories', {
    responses: {
      '200': {
        description: 'TicketHistory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TicketHistory, {partial: true}),
        },
      },
    })
    ticketHistory: TicketHistory,
    @param.query.object('where', getWhereSchemaFor(TicketHistory)) where?: Where<TicketHistory>,
  ): Promise<Count> {
    return this.ticketHistoryRepository.updateAll(ticketHistory, where);
  }

  @get('/ticket-histories/{id}', {
    responses: {
      '200': {
        description: 'TicketHistory model instance',
        content: {'application/json': {schema: getModelSchemaRef(TicketHistory)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<TicketHistory> {
    return this.ticketHistoryRepository.findById(id);
  }

  @patch('/ticket-histories/{id}', {
    responses: {
      '204': {
        description: 'TicketHistory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TicketHistory, {partial: true}),
        },
      },
    })
    ticketHistory: TicketHistory,
  ): Promise<void> {
    await this.ticketHistoryRepository.updateById(id, ticketHistory);
  }

  @put('/ticket-histories/{id}', {
    responses: {
      '204': {
        description: 'TicketHistory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ticketHistory: TicketHistory,
  ): Promise<void> {
    await this.ticketHistoryRepository.replaceById(id, ticketHistory);
  }

  @del('/ticket-histories/{id}', {
    responses: {
      '204': {
        description: 'TicketHistory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ticketHistoryRepository.deleteById(id);
  }
}
