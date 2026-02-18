"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ES2CMessageEvent = exports.EC2SMessageEvent = void 0;
var EC2SMessageEvent;
(function (EC2SMessageEvent) {
    EC2SMessageEvent["MESSAGE_SEND_TYPING_START"] = "c2s:message-send-typing-start";
    EC2SMessageEvent["MESSAGE_SEND_TYPING_STOP"] = "c2s:message-send-typing-stop";
    EC2SMessageEvent["MESSAGE_SEND_MESSAGE"] = "c2s:message-send-message";
    EC2SMessageEvent["MESSAGE_READ_MESSAGE"] = "c2s:message-read-message";
})(EC2SMessageEvent || (exports.EC2SMessageEvent = EC2SMessageEvent = {}));
/**
 * @deprecated Use ES2CEntityEvent.MESSAGE_CHANGED + MessageAction instead.
 * Sẽ bị xoá hoàn toàn ở version tiếp theo.
 *
 * Dead code đã bị xoá:
 * - RECV_LAST_READ_OF_CONVERSATION (legacy, thay bằng CONVERSATION_META)
 * - RECV_MESSAGE_READ (BE emit nhưng FE không listen, thay bằng META sync)
 * - RECV_MESSAGE_DELETED (chưa implement, giữ action 'deleted' trong type mới)
 */
var ES2CMessageEvent;
(function (ES2CMessageEvent) {
    ES2CMessageEvent["RECV_MESSAGE_CREATED"] = "s2c:recv-message-created";
    ES2CMessageEvent["RECV_MESSAGE_UPDATED"] = "s2c:recv-message-updated";
    ES2CMessageEvent["RECV_TYPING_START"] = "s2c:recv-typing-start";
    ES2CMessageEvent["RECV_TYPING_STOP"] = "s2c:recv-typing-stop";
    ES2CMessageEvent["RECV_MESSAGE_ERROR"] = "s2c:recv-message-error";
})(ES2CMessageEvent || (exports.ES2CMessageEvent = ES2CMessageEvent = {}));
