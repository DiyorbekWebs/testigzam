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
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateTerritorialManagementDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `phone`,
        example: '+998 99-999-88-77',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `gmail`,
        example: 'some@thing.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "gmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `telegram`,
        example: 'telegram',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "telegram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `twitter`,
        example: 'twitter',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "twitter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `linkedin`,
        example: 'linkedin',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "linkedin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `facebook`,
        example: 'facebook',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "facebook", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `instagram`,
        example: 'instagram',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "instagram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `firstNameUz`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "firstNameUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `firstNameRu`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "firstNameRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `firstNameEn`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "firstNameEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `lastNameUz`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "lastNameUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `lastNameRu`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "lastNameRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `lastNameEn`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "lastNameEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `fatherNameUz`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "fatherNameUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `fatherNameRu`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "fatherNameRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `fatherNameEn`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "fatherNameEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `positionUz`,
        example: '...',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "positionUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `positionRu`,
        example: '...',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "positionRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `positionEn`,
        example: '...',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTerritorialManagementDto.prototype, "positionEn", void 0);
exports.default = UpdateTerritorialManagementDto;
//# sourceMappingURL=update-territorial-management.dto.js.map