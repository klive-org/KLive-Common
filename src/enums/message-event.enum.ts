export enum EC2SMessageEvent {
  MESSAGE_SEND_TYPING_START = "c2s:message-send-typing-start",
  MESSAGE_SEND_TYPING_STOP = "c2s:message-send-typing-stop",
  MESSAGE_SEND_MESSAGE = "c2s:message-send-message",
  MESSAGE_READ_MESSAGE = "c2s:message-read-message",
}

/**
 * @deprecated Use ES2CEntityEvent.MESSAGE_CHANGED + MessageAction instead.
 * Sẽ bị xoá hoàn toàn ở version tiếp theo.
 *
 * Dead code đã bị xoá:
 * - RECV_LAST_READ_OF_CONVERSATION (legacy, thay bằng CONVERSATION_META)
 * - RECV_MESSAGE_READ (BE emit nhưng FE không listen, thay bằng META sync)
 * - RECV_MESSAGE_DELETED (chưa implement, giữ action 'deleted' trong type mới)
 */
export enum ES2CMessageEvent {
  RECV_MESSAGE_CREATED = "s2c:recv-message-created",
  RECV_MESSAGE_UPDATED = "s2c:recv-message-updated",
  RECV_TYPING_START = "s2c:recv-typing-start",
  RECV_TYPING_STOP = "s2c:recv-typing-stop",
  RECV_MESSAGE_ERROR = "s2c:recv-message-error",
}
