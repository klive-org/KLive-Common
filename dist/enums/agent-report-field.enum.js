"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAgentReportField = void 0;
/**
 * Enum các field names thực tế trong agent report
 * Dùng chung cho BE và FE
 */
var EAgentReportField;
(function (EAgentReportField) {
    EAgentReportField["AVG_RESPONSE_TIME"] = "avgResponseTime";
    EAgentReportField["AVG_FIRST_RESPONSE_TIME"] = "avgFirstResponseTime";
    EAgentReportField["AVG_HANDLE_TIME"] = "avgHandleTime";
    EAgentReportField["AVERAGE_RATING"] = "averageRating";
    EAgentReportField["TOTAL_MISSED_CHATS"] = "totalMissedChats";
    EAgentReportField["TOTAL_MISSED_ASSIGNMENTS"] = "totalMissedAssignments";
    EAgentReportField["TRANSFER_OUT_COUNT"] = "transferOutCount";
})(EAgentReportField || (exports.EAgentReportField = EAgentReportField = {}));
