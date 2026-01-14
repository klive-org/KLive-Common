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
var ES2CMessageEvent;
(function (ES2CMessageEvent) {
    ES2CMessageEvent["RECV_MESSAGE_CREATED"] = "s2c:recv-message-created";
    ES2CMessageEvent["RECV_MESSAGE_UPDATED"] = "s2c:recv-message-updated";
    ES2CMessageEvent["RECV_MESSAGE_DELETED"] = "s2c:recv-message-deleted";
    ES2CMessageEvent["RECV_TYPING_START"] = "s2c:recv-typing-start";
    ES2CMessageEvent["RECV_TYPING_STOP"] = "s2c:recv-typing-stop";
    ES2CMessageEvent["RECV_LAST_READ_OF_CONVERSATION"] = "s2c:recv-last-read-of-conversation";
    ES2CMessageEvent["RECV_MESSAGE_READ"] = "s2c:recv-message-read";
    ES2CMessageEvent["RECV_MESSAGE_ERROR"] = "s2c:recv-message-error";
})(ES2CMessageEvent || (exports.ES2CMessageEvent = ES2CMessageEvent = {}));
