"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TicketHistoryController = class TicketHistoryController {
    constructor(ticketHistoryRepository) {
        this.ticketHistoryRepository = ticketHistoryRepository;
    }
    async create(ticketHistory) {
        return this.ticketHistoryRepository.create(ticketHistory);
    }
    async count(where) {
        return this.ticketHistoryRepository.count(where);
    }
    async find(filter) {
        return this.ticketHistoryRepository.find(filter);
    }
    async updateAll(ticketHistory, where) {
        return this.ticketHistoryRepository.updateAll(ticketHistory, where);
    }
    async findById(id) {
        return this.ticketHistoryRepository.findById(id);
    }
    async updateById(id, ticketHistory) {
        await this.ticketHistoryRepository.updateById(id, ticketHistory);
    }
    async replaceById(id, ticketHistory) {
        await this.ticketHistoryRepository.replaceById(id, ticketHistory);
    }
    async deleteById(id) {
        await this.ticketHistoryRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/ticket-histories', {
        responses: {
            '200': {
                description: 'TicketHistory model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.TicketHistory) } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketHistoryController.prototype, "create", null);
__decorate([
    rest_1.get('/ticket-histories/count', {
        responses: {
            '200': {
                description: 'TicketHistory model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.TicketHistory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketHistoryController.prototype, "count", null);
__decorate([
    rest_1.get('/ticket-histories', {
        responses: {
            '200': {
                description: 'Array of TicketHistory model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.TicketHistory) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.TicketHistory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketHistoryController.prototype, "find", null);
__decorate([
    rest_1.patch('/ticket-histories', {
        responses: {
            '200': {
                description: 'TicketHistory PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.TicketHistory, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.TicketHistory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.TicketHistory, Object]),
    __metadata("design:returntype", Promise)
], TicketHistoryController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/ticket-histories/{id}', {
        responses: {
            '200': {
                description: 'TicketHistory model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.TicketHistory) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketHistoryController.prototype, "findById", null);
__decorate([
    rest_1.patch('/ticket-histories/{id}', {
        responses: {
            '204': {
                description: 'TicketHistory PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.TicketHistory, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.TicketHistory]),
    __metadata("design:returntype", Promise)
], TicketHistoryController.prototype, "updateById", null);
__decorate([
    rest_1.put('/ticket-histories/{id}', {
        responses: {
            '204': {
                description: 'TicketHistory PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.TicketHistory]),
    __metadata("design:returntype", Promise)
], TicketHistoryController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/ticket-histories/{id}', {
        responses: {
            '204': {
                description: 'TicketHistory DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketHistoryController.prototype, "deleteById", null);
TicketHistoryController = __decorate([
    __param(0, repository_1.repository(repositories_1.TicketHistoryRepository)),
    __metadata("design:paramtypes", [repositories_1.TicketHistoryRepository])
], TicketHistoryController);
exports.TicketHistoryController = TicketHistoryController;
//# sourceMappingURL=ticket-history.controller.js.map