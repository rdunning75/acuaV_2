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
let FaqController = class FaqController {
    constructor(faqRepository, userRepository) {
        this.faqRepository = faqRepository;
        this.userRepository = userRepository;
    }
    async create(faq) {
        const filter = { where: { loggedIn: true } };
        const windows = await this.userRepository.find(filter);
        if (windows.length === 0) {
            return null;
        }
        const window = windows[FaqController.windowGen++ % windows.length].window;
        faq.index = FaqController.numberGen++;
        faq.window = window;
        return await this.faqRepository.create(faq);
    }
    async count(where) {
        return await this.faqRepository.count(where);
    }
    async find(filter) {
        return await this.faqRepository.find(filter);
    }
    async updateAll(faq, where) {
        return await this.faqRepository.updateAll(faq, where);
    }
    async findById(id) {
        return await this.faqRepository.findById(id);
    }
    async updateById(id, faq) {
        await this.faqRepository.updateById(id, faq);
    }
    async replaceById(id, faq) {
        await this.faqRepository.replaceById(id, faq);
    }
    async deleteById(id) {
        await this.faqRepository.deleteById(id);
    }
};
FaqController.windowGen = 0;
FaqController.numberGen = 0;
__decorate([
    rest_1.post('/faqs', {
        responses: {
            '200': {
                description: 'Faq model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Faq } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Faq]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "create", null);
__decorate([
    rest_1.get('/faqs/count', {
        responses: {
            '200': {
                description: 'Faq model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Faq))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "count", null);
__decorate([
    rest_1.get('/faqs', {
        responses: {
            '200': {
                description: 'Array of Faq model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Faq } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Faq))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "find", null);
__decorate([
    rest_1.patch('/faqs', {
        responses: {
            '200': {
                description: 'Faq PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Faq))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Faq, Object]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/faqs/{id}', {
        responses: {
            '200': {
                description: 'Faq model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Faq } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "findById", null);
__decorate([
    rest_1.patch('/faqs/{id}', {
        responses: {
            '204': {
                description: 'Faq PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Faq]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "updateById", null);
__decorate([
    rest_1.put('/faqs/{id}', {
        responses: {
            '204': {
                description: 'Faq PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Faq]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/faqs/{id}', {
        responses: {
            '204': {
                description: 'Faq DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "deleteById", null);
FaqController = __decorate([
    __param(0, repository_1.repository(repositories_1.FaqRepository)),
    __param(1, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.FaqRepository,
        repositories_1.UserRepository])
], FaqController);
exports.FaqController = FaqController;
//# sourceMappingURL=faq.controller.js.map