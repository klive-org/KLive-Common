"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EConversationEndStatus = void 0;
var EConversationEndStatus;
(function (EConversationEndStatus) {
    EConversationEndStatus["ISSUE_RESOLVED"] = "ISSUE_RESOLVED";
    EConversationEndStatus["SPAM"] = "SPAM";
    EConversationEndStatus["NO_AGENT_AVAILABLE"] = "NO_AGENT_AVAILABLE";
    EConversationEndStatus["STOP_SUPPORT_REQUEST"] = "STOP_SUPPORT_REQUEST";
    EConversationEndStatus["CUSTOMER_RESPONSE_TIMEOUT"] = "CUSTOMER_RESPONSE_TIMEOUT";
    EConversationEndStatus["NO_VISITOR_MESSAGE"] = "NO_VISITOR_MESSAGE";
    EConversationEndStatus["QUEUE_TIMEOUT"] = "QUEUE_TIMEOUT";
    EConversationEndStatus["ADMIN_FORCE_CLOSED"] = "ADMIN_FORCE_CLOSED";
    /** @deprecated Giữ lại cho dữ liệu cũ. Sử dụng status cụ thể ở trên. */
    EConversationEndStatus["CLOSED_AUTOMATICALLY_BY_SYSTEM"] = "CLOSED_AUTOMATICALLY_BY_SYSTEM";
})(EConversationEndStatus || (exports.EConversationEndStatus = EConversationEndStatus = {}));
