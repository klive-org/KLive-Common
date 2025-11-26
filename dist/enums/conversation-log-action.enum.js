"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationLogAction = void 0;
var ConversationLogAction;
(function (ConversationLogAction) {
    ConversationLogAction["CONVERSATION_CREATED"] = "conversation-created";
    ConversationLogAction["CONVERSATION_RESTARTED"] = "conversation-restarted";
    ConversationLogAction["CONVERSATION_MANUALLY_ASSIGNED"] = "conversation-manually-assigned";
    ConversationLogAction["CONVERSATION_SELF_ASSIGNED"] = "conversation-self-assigned";
    ConversationLogAction["CONVERSATION_AUTO_ASSIGNED"] = "conversation-auto-assigned";
    ConversationLogAction["CONVERSATION_MISSED"] = "conversation-missed";
    ConversationLogAction["CONVERSATION_ENDED_BY_AGENT"] = "conversation-ended-by-agent";
    ConversationLogAction["CONVERSATION_ENDED_BY_VISITOR"] = "conversation-ended-by-visitor";
    ConversationLogAction["CONVERSATION_CLOSED_AUTOMATICALLY"] = "conversation-closed-automatically";
    ConversationLogAction["CONVERSATION_TRANSFERRED_TO_OTHER_AGENT"] = "conversation-transferred-to-other-agent";
})(ConversationLogAction || (exports.ConversationLogAction = ConversationLogAction = {}));
