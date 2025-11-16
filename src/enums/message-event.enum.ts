export enum EC2SMessageEvent {
  MESSAGE_SEND_TYPING_START = "c2s:message-send-typing-start",
  MESSAGE_SEND_TYPING_STOP = "c2s:message-send-typing-stop",
  MESSAGE_SEND_MESSAGE = "c2s:message-send-message",
  MESSAGE_READ_MESSAGE = "c2s:message-read-message",
}

export enum ES2CMessageEvent {
  RECV_MESSAGE_CREATED = "s2c:recv-message-created",
  RECV_MESSAGE_UPDATED = "s2c:recv-message-updated",
  RECV_MESSAGE_DELETED = "s2c:recv-message-deleted",
  RECV_TYPING_START = "s2c:recv-typing-start",
  RECV_TYPING_STOP = "s2c:recv-typing-stop",

  RECV_LAST_READ_OF_CONVERSATION = "s2c:recv-last-read-of-conversation",
  RECV_MESSAGE_READ = "s2c:recv-message-read",
}

