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
const enum_1 = require("../../../infra/shared/enum");
class CreateBannnerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `url`,
        example: 'banner url',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannnerDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `type`,
        example: enum_1.BannerTypeEnum.LEFT,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannnerDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleUz`,
        example: "",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannnerDto.prototype, "titleUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleRu`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannnerDto.prototype, "titleRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleEn`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannnerDto.prototype, "titleEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `descriptionUz`,
        example: "",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannnerDto.prototype, "descriptionUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `descriptionRu`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannnerDto.prototype, "descriptionRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `descriptionEn`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannnerDto.prototype, "descriptionEn", void 0);
exports.default = CreateBannnerDto;
//# sourceMappingURL=create-banner.dto.js.map