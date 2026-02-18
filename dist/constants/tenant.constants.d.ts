/**
 * Tenant-related constants for Multi-Tenant architecture
 *
 * @module constants/tenant
 * @since Phase 2 - Multi-Tenant Refactoring
 */
/**
 * HTTP Header name used to pass the tenant slug in requests
 * Used by both frontend (setting) and backend (reading)
 */
export declare const TENANT_HEADER_NAME = "X-Tenant-Slug";
/**
 * Default tenant slug for backward compatibility
 * Used when no tenant is specified (migration period)
 */
export declare const DEFAULT_TENANT_SLUG = "default";
/**
 * Room type prefixes for tenant-aware Socket.IO rooms
 *
 * Pattern: {tenantSlug}:{ROOM_TYPE}:{resourceId}
 * Example: acme:CONVERSATION:abc123
 */
export declare const TENANT_ROOM_TYPES: {
    /** System-level rooms (e.g., agent online status) */
    readonly SYSTEM: "SYSTEM";
    /** Conversation rooms */
    readonly CONVERSATION: "CONVERSATION";
    /** Agent-specific rooms */
    readonly AGENT: "AGENT";
    /** Visitor-specific rooms */
    readonly VISITOR: "VISITOR";
    /** Group rooms */
    readonly GROUP: "GROUP";
};
/** Type for room type values */
export type TenantRoomType = (typeof TENANT_ROOM_TYPES)[keyof typeof TENANT_ROOM_TYPES];
/**
 * Tenant broadcast room prefix
 * Pattern: TENANT:{tenantSlug}
 */
export declare const TENANT_BROADCAST_PREFIX = "TENANT";
/**
 * System sub-room identifiers
 */
export declare const SYSTEM_ROOMS: {
    readonly AGENTS_ONLINE: "agents-online";
    readonly MONITORING: "monitoring";
    readonly ALL_CONVERSATIONS: "all-conversations";
    readonly CHAT_CONVERSATIONS: "chat-conversations";
};
