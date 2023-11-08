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
class UpdateAgencyStatisticDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `uderReview`,
        example: 123,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAgencyStatisticDto.prototype, "uderReview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `rejected`,
        example: 31,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAgencyStatisticDto.prototype, "rejected", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `solved`,
        example: 342,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAgencyStatisticDto.prototype, "solved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `detachedLandArea`,
        example: 1223,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAgencyStatisticDto.prototype, "detachedLandArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `allocatedSubsidies`,
        example: 1312,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAgencyStatisticDto.prototype, "allocatedSubsidies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `greenhouseSubsidies`,
        example: 321,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAgencyStatisticDto.prototype, "greenhouseSubsidies", void 0);
exports.default = UpdateAgencyStatisticDto;
//# sourceMappingURL=update-agency-statistic.dto.js.map