"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ES2CConversationEvent = exports.EC2SConversationEvent = void 0;
/**
 * @deprecated Use ES2CEntityEvent.CONVERSATION_CHANGED + ConversationAction instead.
 * Sẽ bị xoá hoàn toàn ở version tiếp theo.
 */
var EC2SConversationEvent;
(function (EC2SConversationEvent) {
    EC2SConversationEvent["CONVERSATION_BUMP_READ"] = "c2s:conversation-bump-read";
    EC2SConversationEvent["CONVERSATION_JOIN_ROOM"] = "c2s:conversation-join-room";
    EC2SConversationEvent["CONVERSATION_LEAVE_ROOM"] = "c2s:conversation-leave-room";
    EC2SConversationEvent["JOIN_ALL_CONVERSATIONS_ROOM"] = "c2s:join-all-conversations-room";
    EC2SConversationEvent["LEAVE_ALL_CONVERSATIONS_ROOM"] = "c2s:leave-all-conversations-room";
    EC2SConversationEvent["JOIN_CHAT_CONVERSATIONS_ROOM"] = "c2s:join-chat-conversations-room";
    EC2SConversationEvent["LEAVE_CHAT_CONVERSATIONS_ROOM"] = "c2s:leave-chat-conversations-room";
    EC2SConversationEvent["CONVERSATION_GET_META"] = "c2s:conversation-get-meta";
})(EC2SConversationEvent || (exports.EC2SConversationEvent = EC2SConversationEvent = {}));
/**
 * @deprecated Use ES2CEntityEvent.CONVERSATION_CHANGED + ConversationAction instead.
 * Sẽ bị xoá hoàn toàn ở version tiếp theo.
 *
 * Dead code đã bị xoá:
 * - RECV_CONVERSATION_ENQUEUE (không có BE emit lẫn FE handler)
 * - RECV_CONVERSATION_DEQUEUE (không có BE emit lẫn FE handler)
 * - RECV_CONVERSATION_ERROR (không có BE emit lẫn FE handler)
 */
var ES2CConversationEvent;
(function (ES2CConversationEvent) {
    ES2CConversationEvent["RECV_CONVERSATION_CREATED"] = "s2c:recv-conversation-created";
    ES2CConversationEvent["RECV_CONVERSATION_UPDATED"] = "s2c:recv-conversation-updated";
    ES2CConversationEvent["RECV_CONVERSATION_ASSIGNED"] = "s2c:recv-conversation-assigned";
    ES2CConversationEvent["RECV_CONVERSATION_UNASSIGN"] = "s2c:recv-conversation-unassign";
    ES2CConversationEvent["RECV_CONVERSATION_JOIN"] = "s2c:recv-conversation-join";
    ES2CConversationEvent["RECV_CONVERSATION_LEAVE"] = "s2c:recv-conversation-leave";
    ES2CConversationEvent["RECV_CONVERSATION_CLOSE"] = "s2c:recv-conversation-close";
    ES2CConversationEvent["RECV_CONVERSATION_ENINVITED"] = "s2c:recv-conversation-eninvited";
    ES2CConversationEvent["RECV_CONVERSATION_DEINVITED"] = "s2c:recv-conversation-deinvited";
    ES2CConversationEvent["RECV_BADGE_COUNT"] = "s2c:recv-badge-count";
    ES2CConversationEvent["RECV_ROOMS_LIST"] = "s2c:recv-rooms-list";
    ES2CConversationEvent["RECV_USER_CONVERSATION_COUNT_UPDATED"] = "s2c:recv-user-conversation-count-updated";
    ES2CConversationEvent["RECV_CONVERSATION_META"] = "s2c:recv-conversation-meta";
    ES2CConversationEvent["RECV_VISITOR_UPDATED"] = "s2c:recv-visitor-updated";
})(ES2CConversationEvent || (exports.ES2CConversationEvent = ES2CConversationEvent = {}));
