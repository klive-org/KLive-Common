"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EUserType = void 0;
/**
 * Loại user trong hệ thống Klive.
 *
 * Dùng trên User schema, Visitor schema, và ConversationLog
 * để phân biệt bản chất của user một cách nhất quán.
 *
 * - USER: Agent thật (human agent đăng nhập dashboard)
 * - VISITOR: Khách truy cập widget
 * - SYSTEM: Hệ thống (auto-generated actions, không gắn entity)
 * - AI_AGENT: AI Agent tự động (service kết nối socket)
 */
var EUserType;
(function (EUserType) {
    EUserType["USER"] = "User";
    EUserType["VISITOR"] = "Visitor";
    EUserType["SYSTEM"] = "System";
    EUserType["AI_AGENT"] = "AI-Agent";
})(EUserType || (exports.EUserType = EUserType = {}));
