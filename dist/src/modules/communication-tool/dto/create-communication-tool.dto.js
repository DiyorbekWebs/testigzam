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
class CreateCommunicationToolDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `mapLink`,
        example: 'link',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "mapLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `phone`,
        example: '+998 71 244 4625',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `email`,
        example: 'garden@agro.uz,',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `callCenter`,
        example: '(55) 500-80-08 1342',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "callCenter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `addressUz`,
        example: "",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "addressUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `addressRu`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "addressRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `addressEn`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "addressEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `workOrderUz`,
        example: "",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "workOrderUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `workOrderRu`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "workOrderRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `workOrderEn`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommunicationToolDto.prototype, "workOrderEn", void 0);
exports.default = CreateCommunicationToolDto;
//# sourceMappingURL=create-communication-tool.dto.js.map