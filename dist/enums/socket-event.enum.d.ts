/**
 * Entity-Centric Socket Events (S2C only)
 *
 * Naming convention:
 *   Entity events: s2c:{entity}-changed
 *   System events: s2c:{domain}-{noun}
 *
 * Replaces: ES2CConversationEvent, ES2CMessageEvent, ES2CWSEvent
 */
/** Entity-centric events — mỗi entity chỉ có 1 event, phân biệt bằng action field */
export declare enum ES2CEntityEvent {
    /** Conversation entity changed (created, assigned, unassigned, closed, updated, etc.) */
    CONVERSATION_CHANGED = "s2c:conversation-changed",
    /** Message entity changed (created, updated, deleted, error) */
    MESSAGE_CHANGED = "s2c:message-changed",
    /** User entity changed (status_changed, offline, conversation_count_updated) */
    USER_CHANGED = "s2c:user-changed"
}
/** System events — không liên quan trực tiếp tới entity state changes */
export declare enum ES2CSystemEvent {
    /** Typing indicator (start/stop) — ephemeral, không persist */
    TYPING_INDICATOR = "s2c:typing-indicator",
    /** Badge count update — system notification */
    BADGE_COUNT = "s2c:badge-count",
    /** Conversation metadata sync (read status, seq) — polling response */
    CONVERSATION_META = "s2c:conversation-meta",
    /** Rooms list update — debug/internal */
    ROOMS_LIST = "s2c:rooms-list",
    /** Conversation status counts update — broadcast to all agents */
    STATUS_COUNTS = "s2c:status-counts",
    /** WebSocket error response */
    ERROR = "s2c:error"
}
