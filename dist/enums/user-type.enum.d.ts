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
export declare enum EUserType {
    USER = "User",
    VISITOR = "Visitor",
    SYSTEM = "System",
    AI_AGENT = "AI-Agent"
}
