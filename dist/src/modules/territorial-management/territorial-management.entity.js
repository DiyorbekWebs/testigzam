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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerritorialManagement = void 0;
const typeorm_1 = require("typeorm");
const territorial_division_entity_1 = require("../territorial-division/territorial-division.entity");
let TerritorialManagement = exports.TerritorialManagement = class TerritorialManagement {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "gmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "telegram", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "facebook", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "twitter", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "instagram", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "linkedin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "firstNameUz", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "firstNameRu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "firstNameEn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "lastNameUz", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "lastNameRu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "lastNameEn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "fatherNameUz", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "fatherNameRu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "fatherNameEn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "positionUz", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "positionRu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], TerritorialManagement.prototype, "positionEn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => territorial_division_entity_1.TerritorialDivision, tr => tr.territorialManagements, {
        onDelete: "CASCADE",
        cascade: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", territorial_division_entity_1.TerritorialDivision)
], TerritorialManagement.prototype, "territorialDivision", void 0);
exports.TerritorialManagement = TerritorialManagement = __decorate([
    (0, typeorm_1.Entity)('territorial_management')
], TerritorialManagement);
//# sourceMappingURL=territorial-management.entity.js.map