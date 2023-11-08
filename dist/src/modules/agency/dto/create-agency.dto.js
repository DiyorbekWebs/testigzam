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
class CreateAgencyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `url`,
        example: 'Agency image url',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgencyDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `link`,
        example: 'video link',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgencyDto.prototype, "link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleUz`,
        example: "",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgencyDto.prototype, "titleUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleRu`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgencyDto.prototype, "titleRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleEn`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgencyDto.prototype, "titleEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `descriptionUz`,
        example: "",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgencyDto.prototype, "descriptionUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `descriptionRu`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgencyDto.prototype, "descriptionRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `descriptionEn`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgencyDto.prototype, "descriptionEn", void 0);
exports.default = CreateAgencyDto;
//# sourceMappingURL=create-agency.dto.js.map