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
class CreateTerritorialDivisionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `phone`,
        example: '+998 99-999-88-77',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `website`,
        example: 'https://...',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `telegram`,
        example: 'telegram',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "telegram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `twitter`,
        example: 'twitter',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "twitter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `linkedin`,
        example: 'linkedin',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "linkedin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `facebook`,
        example: 'facebook',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "facebook", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `instagram`,
        example: 'instagram',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "instagram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `areaUz`,
        example: "...",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "areaUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `areaRu`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "areaRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `areaEn`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "areaEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleUz`,
        example: "...",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "titleUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleRu`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "titleRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleEn`,
        example: "...",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTerritorialDivisionDto.prototype, "titleEn", void 0);
exports.default = CreateTerritorialDivisionDto;
//# sourceMappingURL=create-territorial-division.dto.js.map