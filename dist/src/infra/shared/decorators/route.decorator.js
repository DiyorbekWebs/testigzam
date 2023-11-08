"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const common_1 = require("@nestjs/common");
exports.Route = (0, common_1.createParamDecorator)((_data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const localPort = req.socket.localPort;
    const route = `${req.protocol}://${req.hostname}${localPort ? ':' + localPort : ''}${req.path}`;
    return route;
});
//# sourceMappingURL=route.decorator.js.map