"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
const access_token_user_guard_1 = require("./modules/auth/passport-stratagies/access-token-user/access-token-user.guard");
const roles_guard_1 = require("./modules/auth/guards/roles.guard");
const validators_1 = require("./infra/validators");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'warn', 'error'],
    });
    app.enableCors({
        origin: true,
        credentials: true,
    });
    app.use(cookieParser());
    app.useGlobalFilters(new validators_1.ErrorFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        transform: true,
    }));
    const reflector = app.get(core_1.Reflector);
    app.useGlobalGuards(new access_token_user_guard_1.AccessTokenUserGuard(reflector), new roles_guard_1.RolesGuard(reflector));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Bvir uz')
        .setDescription('B vir API description')
        .setVersion('0.2')
        .addBearerAuth()
        .addCookieAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
        },
    });
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map