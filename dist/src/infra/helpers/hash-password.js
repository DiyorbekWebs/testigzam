"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}
exports.default = hashPassword;
//# sourceMappingURL=hash-password.js.map