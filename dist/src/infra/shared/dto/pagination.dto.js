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
const class_transformer_1 = require("class-transformer");
const common_1 = require("@nestjs/common");
function parsePaginationQuery({ key, value }) {
    const int = parseInt(value);
    if (isNaN(int) || `${int}`.length !== value.length) {
        throw new common_1.BadRequestException(`${key} should be integer. Or pagination query string may be absent, then the page=1, limit=10 will be used.`);
    }
    return int;
}
class PaginationDto {
    constructor() {
        this.page = 1;
        this.limit = this.limit ? this.limit : 100;
        this.page = this.page ? this.page : 1;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Limit`,
        example: 20,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(parsePaginationQuery),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Page`,
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(parsePaginationQuery),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
exports.default = PaginationDto;
//# sourceMappingURL=pagination.dto.js.map