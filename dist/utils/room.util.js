"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversationRoom = exports.getAgentRoom = void 0;
const room_constants_1 = require("../constants/room.constants");
/**
 * Tạo room name cho agent với prefix AGENT:
 */
const getAgentRoom = (agentId) => {
    return `${room_constants_1.ROOM_PREFIX_AGENT}${agentId}`;
};
exports.getAgentRoom = getAgentRoom;
/**
 * Tạo room name cho conversation với prefix CONVERSATION:
 */
const getConversationRoom = (conversationId) => {
    return `${room_constants_1.ROOM_PREFIX_CONVERSATION}${conversationId}`;
};
exports.getConversationRoom = getConversationRoom;
