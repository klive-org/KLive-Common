import { ENotificationMessageType } from "../enums/notification-message-type.enum";

/**
 * Metadata cho agent notification message (join, leave, observing)
 */
export interface IAgentNotificationMetadata {
  agentId: string;
  fullName: string;
  jobName?: string;
}

/**
 * Metadata cho conversation closed notification message
 * Dùng để hiển thị ai đóng và lý do trên dashboard
 */
export interface IConversationClosedMetadata {
  endedByType: "agent" | "visitor" | "system";
  endedByName?: string;
  endReason?: string;
}

/**
 * Metadata cho conversation transferred notification message
 * Dùng để hiển thị ai transfer cho ai + lý do trên dashboard
 */
export interface IConversationTransferredMetadata {
  fromAgentId: string;
  fromAgentName: string;
  toAgentId: string;
  toAgentName: string;
  reason?: string;
}

/**
 * @deprecated Dùng IAgentNotificationMetadata thay thế. Giữ lại để backward compatibility.
 */
export type INotificationMetadata = IAgentNotificationMetadata;

/**
 * Structure cho notification content
 * Support object-based notification thay vì hardcoded string
 */
export interface INotificationContent {
  type: ENotificationMessageType;
  metadata?: IAgentNotificationMetadata | IConversationClosedMetadata | IConversationTransferredMetadata;
}
