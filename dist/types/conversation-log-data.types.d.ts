import { ConversationLogAction } from "../enums/conversation-log-action.enum";
import { EConversationEndStatus } from "../enums/conversation-end-status.enum";
/**
 * Base assignment info shared across multiple actions
 */
export interface IAssignmentInfo {
    assignmentId: string;
    assignmentCode: string;
    agentId: string;
    assignedAt: string;
}
/**
 * Data for CONVERSATION_CREATED action
 */
export interface IConversationCreatedData {
    scenarioId?: string;
    visitorId?: string;
}
/**
 * Data for CONVERSATION_RESTARTED action
 */
export interface IConversationRestartedData {
    previousConversationId: string;
    scenarioId?: string;
}
/**
 * Data for CONVERSATION_MANUALLY_ASSIGNED, CONVERSATION_SELF_ASSIGNED, CONVERSATION_AUTO_ASSIGNED actions
 */
export interface IAssignmentData {
    assignmentId: string;
    assignmentCode: string;
    agentId: string;
    assignedById?: string;
    assignedAt: string;
    scenarioId?: string;
    isFirstResponse?: boolean;
    responseDuration?: number;
}
/**
 * Data for CONVERSATION_MISSED and CONVERSATION_MISSED_ASSIGNMENT actions
 */
export interface IMissedAssignmentData {
    assignmentId: string;
    assignmentCode: string;
    agentId: string;
    assignedAt: string;
    endedAt: string;
    handleDuration: number;
    reason: string;
}
/**
 * Data for CONVERSATION_ENDED_BY_AGENT, CONVERSATION_ENDED_BY_VISITOR,
 * CONVERSATION_CLOSED_AUTOMATICALLY actions
 */
export interface IConversationEndedData {
    endReason: EConversationEndStatus;
    endedAt: string;
    autoCloseStartedAt?: string;
}
/**
 * Assignment info within transfer data
 */
export interface ITransferredAssignmentInfo {
    assignmentId: string;
    assignmentCode: string;
    agentId: string;
    assignedAt: string;
    scenarioId?: string;
}
/**
 * Previous assignment info (ended due to transfer)
 */
export interface IPreviousAssignmentInfo {
    assignmentId: string;
    assignmentCode: string;
    agentId: string;
    assignedAt: string;
    endedAt: string;
    handleDuration: number;
    endReason: string;
}
/**
 * Data for CONVERSATION_TRANSFERRED_TO_OTHER_AGENT action
 * Contains both old (ended) and new (active) assignment info
 */
export interface IConversationTransferredData {
    newAssignment: ITransferredAssignmentInfo;
    previousAssignment: IPreviousAssignmentInfo;
    transferReason: string;
}
/**
 * Data for CONVERSATION_TRANSFERRED_TO_QUEUE action
 */
export interface IConversationTransferredToQueueData {
    queueId: string;
    queueName: string;
    previousAgentId?: string;
    previousAssignmentId?: string;
    assignedAt: string;
}
/**
 * Data for CONVERSATION_AGENT_JOIN_ROOM, CONVERSATION_AGENT_LEAVE_ROOM,
 * CONVERSATION_AGENT_OBSERVE_CONVERSATION actions
 */
export interface IAgentActivityData {
    agentId: string;
    conversationId: string;
    timestamp: string;
}
/**
 * Data for CONVERSATION_AGENT_SEND_MESSAGE action
 */
export interface IAgentSendMessageData {
    messageId: string;
    content: string;
    timestamp: string;
}
/**
 * Data for CONVERSATION_VISITOR_SEND_MESSAGE action
 */
export interface IVisitorSendMessageData {
    messageId: string;
    content: string;
    timestamp: string;
}
/**
 * Union type of all possible conversation log data based on action
 */
export type ConversationLogData = IConversationCreatedData | IConversationRestartedData | IAssignmentData | IMissedAssignmentData | IConversationEndedData | IConversationTransferredData | IConversationTransferredToQueueData | IAgentActivityData | IAgentSendMessageData | IVisitorSendMessageData;
/**
 * Type map for discriminated union based on ConversationLogAction
 */
export type ConversationLogDataMap = {
    [ConversationLogAction.CONVERSATION_CREATED]: IConversationCreatedData;
    [ConversationLogAction.CONVERSATION_RESTARTED]: IConversationRestartedData;
    [ConversationLogAction.CONVERSATION_MANUALLY_ASSIGNED]: IAssignmentData;
    [ConversationLogAction.CONVERSATION_SELF_ASSIGNED]: IAssignmentData;
    [ConversationLogAction.CONVERSATION_AUTO_ASSIGNED]: IAssignmentData;
    [ConversationLogAction.CONVERSATION_MISSED]: IMissedAssignmentData;
    [ConversationLogAction.CONVERSATION_MISSED_ASSIGNMENT]: IMissedAssignmentData;
    [ConversationLogAction.CONVERSATION_ENDED_BY_AGENT]: IConversationEndedData;
    [ConversationLogAction.CONVERSATION_ENDED_BY_VISITOR]: IConversationEndedData;
    [ConversationLogAction.CONVERSATION_CLOSED_AUTOMATICALLY]: IConversationEndedData;
    [ConversationLogAction.CONVERSATION_TRANSFERRED_TO_OTHER_AGENT]: IConversationTransferredData;
    [ConversationLogAction.CONVERSATION_TRANSFERRED_TO_QUEUE]: IConversationTransferredToQueueData;
    [ConversationLogAction.CONVERSATION_AGENT_JOIN_ROOM]: IAgentActivityData;
    [ConversationLogAction.CONVERSATION_AGENT_LEAVE_ROOM]: IAgentActivityData;
    [ConversationLogAction.CONVERSATION_AGENT_OBSERVE_CONVERSATION]: IAgentActivityData;
    [ConversationLogAction.CONVERSATION_AGENT_SEND_MESSAGE]: IAgentSendMessageData;
    [ConversationLogAction.CONVERSATION_VISITOR_SEND_MESSAGE]: IVisitorSendMessageData;
};
/**
 * Helper type to get data type for a specific action
 */
export type GetConversationLogData<T extends ConversationLogAction> = ConversationLogDataMap[T];
