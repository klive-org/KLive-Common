import { ENotificationMessageType } from "../enums/notification-message-type.enum";

/**
 * Metadata cho notification message
 */
export interface INotificationMetadata {
  agentId: string;
  agentName: string;
}

/**
 * Structure cho notification content
 * Support object-based notification thay vì hardcoded string
 */
export interface INotificationContent {
  type: ENotificationMessageType;
  metadata: INotificationMetadata;
}
