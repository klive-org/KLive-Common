"use strict";
/**
 * Entity-Centric Socket Events (S2C only)
 *
 * Naming convention:
 *   Entity events: s2c:{entity}-changed
 *   System events: s2c:{domain}-{noun}
 *
 * Replaces: ES2CConversationEvent, ES2CMessageEvent, ES2CWSEvent
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ES2CSystemEvent = exports.ES2CEntityEvent = void 0;
// ========== S2C Entity Events ==========
/** Entity-centric events — mỗi entity chỉ có 1 event, phân biệt bằng action field */
var ES2CEntityEvent;
(function (ES2CEntityEvent) {
    /** Conversation entity changed (created, assigned, unassigned, closed, updated, etc.) */
    ES2CEntityEvent["CONVERSATION_CHANGED"] = "s2c:conversation-changed";
    /** Message entity changed (created, updated, deleted, error) */
    ES2CEntityEvent["MESSAGE_CHANGED"] = "s2c:message-changed";
    /** User entity changed (status_changed, offline, conversation_count_updated) */
    ES2CEntityEvent["USER_CHANGED"] = "s2c:user-changed";
})(ES2CEntityEvent || (exports.ES2CEntityEvent = ES2CEntityEvent = {}));
// ========== S2C System Events (giữ riêng biệt — ephemeral / non-entity) ==========
/** System events — không liên quan trực tiếp tới entity state changes */
var ES2CSystemEvent;
(function (ES2CSystemEvent) {
    /** Typing indicator (start/stop) — ephemeral, không persist */
    ES2CSystemEvent["TYPING_INDICATOR"] = "s2c:typing-indicator";
    /** Badge count update — system notification */
    ES2CSystemEvent["BADGE_COUNT"] = "s2c:badge-count";
    /** Conversation metadata sync (read status, seq) — polling response */
    ES2CSystemEvent["CONVERSATION_META"] = "s2c:conversation-meta";
    /** Rooms list update — debug/internal */
    ES2CSystemEvent["ROOMS_LIST"] = "s2c:rooms-list";
    /** Conversation status counts update — broadcast to all agents */
    ES2CSystemEvent["STATUS_COUNTS"] = "s2c:status-counts";
    /** WebSocket error response */
    ES2CSystemEvent["ERROR"] = "s2c:error";
})(ES2CSystemEvent || (exports.ES2CSystemEvent = ES2CSystemEvent = {}));
