"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENotificationMessageType = void 0;
/**
 * Notification message types
 * Used for structured notification content in conversation messages
 */
var ENotificationMessageType;
(function (ENotificationMessageType) {
    ENotificationMessageType["AGENT_JOINED"] = "agent_joined";
    ENotificationMessageType["AGENT_OBSERVING"] = "agent_observing";
    ENotificationMessageType["AGENT_LEFT"] = "agent_left";
    ENotificationMessageType["CONVERSATION_CLOSED"] = "conversation_closed";
    ENotificationMessageType["CONVERSATION_TRANSFERRED"] = "conversation_transferred";
})(ENotificationMessageType || (exports.ENotificationMessageType = ENotificationMessageType = {}));
