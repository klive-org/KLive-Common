/**
 * Enum các field names thực tế trong agent report
 * Dùng chung cho BE và FE
 */
export enum EAgentReportField {
  TOTAL_CONVERSATIONS = "totalConversations",
  AVG_RESPONSE_TIME = "avgResponseTime",
  AVG_FIRST_RESPONSE_TIME = "avgFirstResponseTime",
  AVG_HANDLE_TIME = "avgHandleTime",
  AVERAGE_RATING = "averageRating",
  TOTAL_MISSED_CONVERSATIONS = "totalMissedConversations",
  TOTAL_MISSED_ASSIGNMENTS = "totalMissedAssignments",
  TRANSFER_OUT_COUNT = "transferOutCount",
}
