"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ES2CWSEvent = void 0;
var ES2CWSEvent;
(function (ES2CWSEvent) {
    ES2CWSEvent["WS_ERROR_RESPONSE"] = "s2c:ws-error-response";
    // User status events - gửi kèm status đầy đủ
    ES2CWSEvent["RECV_USER_STATUS_CHANGED"] = "s2c:recv-user-status-changed";
    ES2CWSEvent["RECV_USER_OFFLINE"] = "s2c:recv-user-offline";
})(ES2CWSEvent || (exports.ES2CWSEvent = ES2CWSEvent = {}));
