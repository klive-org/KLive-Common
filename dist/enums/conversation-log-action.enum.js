"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationLogAction = void 0;
var ConversationLogAction;
(function (ConversationLogAction) {
    //   CREATE_NEW_CONVERSATION = "create-new-conversation",
    //   RESTART_CONVERSATION = "restart-conversation",
    //   MANUAL_ASSIGN = "manual-assign",
    //   FORCE_ASSIGN = "force-assign",
    //   AUTO_ASSIGN = "auto-assign",
    //   MISS_CONVERSATION = "miss-conversation",
    //   END_CONVERSATION = "end-conversation",
    //   END_CONVERSATION_FOR_VISITOR = "end-conversation-for-visitor",
    //   CLOSE_CONVERSATION = "close-conversation",
    //   TRANSFER_CONVERSATION = "transfer-conversation",
    //
    ConversationLogAction["CONVERSATION_CREATED"] = "conversation-created";
    ConversationLogAction["CONVERSATION_RESTARTED"] = "conversation-restarted";
    ConversationLogAction["CONVERSATION_MANUALLY_ASSIGNED"] = "conversation-manually-assigned";
    ConversationLogAction["CONVERSATION_AUTO_ASSIGNED"] = "conversation-auto-assigned";
    ConversationLogAction["CONVERSATION_MISSED"] = "conversation-missed";
    ConversationLogAction["CONVERSATION_ENDED_BY_AGENT"] = "conversation-ended-by-agent";
    ConversationLogAction["CONVERSATION_ENDED_BY_VISITOR"] = "conversation-ended-by-visitor";
    ConversationLogAction["CONVERSATION_CLOSED_AUTOMATICALLY"] = "conversation-closed-automatically";
    ConversationLogAction["CONVERSATION_TRANSFERRED_TO_OTHER_AGENT"] = "conversation-transferred-to-other-agent";
})(ConversationLogAction || (exports.ConversationLogAction = ConversationLogAction = {}));
