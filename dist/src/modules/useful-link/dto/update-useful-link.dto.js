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
class UpdateUsefulLinkDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `url`,
        example: 'UsefulLink url',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUsefulLinkDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `link`,
        example: 'link',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUsefulLinkDto.prototype, "link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleUz`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUsefulLinkDto.prototype, "titleUz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleRu`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUsefulLinkDto.prototype, "titleRu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `titleEn`,
        example: "",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUsefulLinkDto.prototype, "titleEn", void 0);
exports.default = UpdateUsefulLinkDto;
//# sourceMappingURL=update-useful-link.dto.js.map