"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ES2CConversationEvent = exports.EC2SConversationEvent = void 0;
var EC2SConversationEvent;
(function (EC2SConversationEvent) {
    EC2SConversationEvent["CONVERSATION_BUMP_READ"] = "c2s:conversation-bump-read";
    EC2SConversationEvent["CONVERSATION_JOIN_ROOM"] = "c2s:conversation-join-room";
    EC2SConversationEvent["CONVERSATION_LEAVE_ROOM"] = "c2s:conversation-leave-room";
    EC2SConversationEvent["JOIN_ALL_CONVERSATIONS_ROOM"] = "c2s:join-all-conversations-room";
    EC2SConversationEvent["LEAVE_ALL_CONVERSATIONS_ROOM"] = "c2s:leave-all-conversations-room";
})(EC2SConversationEvent || (exports.EC2SConversationEvent = EC2SConversationEvent = {}));
var ES2CConversationEvent;
(function (ES2CConversationEvent) {
    ES2CConversationEvent["RECV_CONVERSATION_CREATED"] = "s2c:recv-conversation-created";
    ES2CConversationEvent["RECV_CONVERSATION_UPDATED"] = "s2c:recv-conversation-updated";
    ES2CConversationEvent["RECV_CONVERSATION_ASSIGNED"] = "s2c:recv-conversation-assigned";
    ES2CConversationEvent["RECV_CONVERSATION_JOIN"] = "s2c:recv-conversation-join";
    ES2CConversationEvent["RECV_CONVERSATION_LEAVE"] = "s2c:recv-conversation-leave";
    ES2CConversationEvent["RECV_CONVERSATION_CLOSE"] = "s2c:recv-conversation-close";
    ES2CConversationEvent["RECV_CONVERSATION_ENQUEUE"] = "s2c:recv-conversation-enqueue";
    ES2CConversationEvent["RECV_CONVERSATION_DEQUEUE"] = "s2c:recv-conversation-dequeue";
    ES2CConversationEvent["RECV_CONVERSATION_ENINVITED"] = "s2c:recv-conversation-eninvited";
    ES2CConversationEvent["RECV_CONVERSATION_DEINVITED"] = "s2c:recv-conversation-deinvited";
    ES2CConversationEvent["RECV_CONVERSATION_ERROR"] = "s2c:recv-conversation-error";
    ES2CConversationEvent["RECV_BADGE_COUNT"] = "s2c:recv-badge-count";
    ES2CConversationEvent["RECV_ROOMS_LIST"] = "s2c:recv-rooms-list";
    ES2CConversationEvent["RECV_USER_CONVERSATION_COUNT_UPDATED"] = "s2c:recv-user-conversation-count-updated";
})(ES2CConversationEvent || (exports.ES2CConversationEvent = ES2CConversationEvent = {}));
