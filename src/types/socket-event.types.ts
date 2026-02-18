/**
 * Typed payloads for Entity-Centric Socket Events
 *
 * Each entity event carries an `action` field to distinguish
 * the type of change, plus optional `metadata` for context.
 */

// ========== Action Types ==========

export type ConversationAction =
  | "created"
  | "updated"
  | "assigned"
  | "unassigned"
  | "closed"
  | "agent_joined"
  | "agent_left"
  | "visitor_updated";

export type MessageAction = "created" | "updated" | "deleted" | "error";

export type UserAction = "status_changed" | "offline" | "conversation_count_updated";

export type TypingAction = "start" | "stop";

// ========== Entity Event Payloads ==========

/**
 * Payload for ES2CEntityEvent.CONVERSATION_CHANGED
 *
 * @example
 * { action: 'assigned', conversation: {...}, metadata: { agentId: '123' } }
 */
export interface IConversationChangedPayload<TConversation = unknown> {
  action: ConversationAction;
  /** Full conversation object (ConversationDto on BE, IConversation on FE) */
  conversation: TConversation;
  metadata: {
    /** Agent liên quan (assign/unassign/join/leave) */
    agentId?: string;
    /** Visitor liên quan (visitor_updated) */
    visitorId?: string;
  };
}

/**
 * Payload for ES2CEntityEvent.MESSAGE_CHANGED
 *
 * @example
 * { action: 'created', message: {...}, metadata: { clientMessageId: 'abc' } }
 */
export interface IMessageChangedPayload<TMessage = unknown> {
  action: MessageAction;
  /** Full message object (MessageDto on BE, IMessage on FE) */
  message: TMessage;
  metadata: {
    /** Client-side message ID for optimistic update reconciliation */
    clientMessageId?: string;
    /** Error details (only when action = 'error') */
    error?: {
      code: string;
      message: string;
    };
  };
}

/**
 * Payload for ES2CEntityEvent.USER_CHANGED
 *
 * @example
 * { action: 'status_changed', userId: '123', data: { status: 'online' } }
 */
export interface IUserChangedPayload {
  action: UserAction;
  userId: string;
  data: {
    /** User status (EUserStatus) — for action: 'status_changed' */
    status?: string;
    /** Conversation count — for action: 'conversation_count_updated' */
    count?: number;
  };
}

// ========== System Event Payloads ==========

/**
 * Payload for ES2CSystemEvent.TYPING_INDICATOR
 */
export interface ITypingIndicatorPayload {
  action: TypingAction;
  conversationId: string;
  userId: string;
}

/**
 * Payload for ES2CSystemEvent.BADGE_COUNT
 */
export interface IBadgeCountPayload {
  conversations: string[];
}

/**
 * Payload for ES2CSystemEvent.ROOMS_LIST
 */
export interface IRoomsListPayload {
  rooms: string[];
}
