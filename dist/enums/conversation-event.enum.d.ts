export declare enum EC2SConversationEvent {
    CONVERSATION_BUMP_READ = "c2s:conversation-bump-read",
    CONVERSATION_JOIN_ROOM = "c2s:conversation-join-room",
    CONVERSATION_LEAVE_ROOM = "c2s:conversation-leave-room",
    JOIN_ALL_CONVERSATIONS_ROOM = "c2s:join-all-conversations-room",
    LEAVE_ALL_CONVERSATIONS_ROOM = "c2s:leave-all-conversations-room",
    JOIN_CHAT_CONVERSATIONS_ROOM = "c2s:join-chat-conversations-room",
    LEAVE_CHAT_CONVERSATIONS_ROOM = "c2s:leave-chat-conversations-room",
    CONVERSATION_GET_META = "c2s:conversation-get-meta"
}
export declare enum ES2CConversationEvent {
    RECV_CONVERSATION_CREATED = "s2c:recv-conversation-created",
    RECV_CONVERSATION_UPDATED = "s2c:recv-conversation-updated",
    RECV_CONVERSATION_ASSIGNED = "s2c:recv-conversation-assigned",
    RECV_CONVERSATION_UNASSIGN = "s2c:recv-conversation-unassign",
    RECV_CONVERSATION_JOIN = "s2c:recv-conversation-join",
    RECV_CONVERSATION_LEAVE = "s2c:recv-conversation-leave",
    RECV_CONVERSATION_CLOSE = "s2c:recv-conversation-close",
    RECV_CONVERSATION_ENQUEUE = "s2c:recv-conversation-enqueue",
    RECV_CONVERSATION_DEQUEUE = "s2c:recv-conversation-dequeue",
    RECV_CONVERSATION_ENINVITED = "s2c:recv-conversation-eninvited",
    RECV_CONVERSATION_DEINVITED = "s2c:recv-conversation-deinvited",
    RECV_CONVERSATION_ERROR = "s2c:recv-conversation-error",
    RECV_BADGE_COUNT = "s2c:recv-badge-count",
    RECV_ROOMS_LIST = "s2c:recv-rooms-list",
    RECV_USER_CONVERSATION_COUNT_UPDATED = "s2c:recv-user-conversation-count-updated",
    RECV_CONVERSATION_META = "s2c:recv-conversation-meta",
    RECV_VISITOR_UPDATED = "s2c:recv-visitor-updated"
}
