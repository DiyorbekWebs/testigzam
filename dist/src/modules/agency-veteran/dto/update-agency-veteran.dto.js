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
class UpdateAgencyVeteranDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `url`,
        example: 'Agency veteran image url',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAgencyVeteranDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `nameUz`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAgencyVeteranDto.prototype, "nameUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `nameRu`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAgencyVeteranDto.prototype, "nameRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `nameEn`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAgencyVeteranDto.prototype, "nameEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `positionUz`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAgencyVeteranDto.prototype, "positionUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `positionRu`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAgencyVeteranDto.prototype, "positionRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `positionEn`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAgencyVeteranDto.prototype, "positionEn", void 0);
exports.default = UpdateAgencyVeteranDto;
//# sourceMappingURL=update-agency-veteran.dto.js.map