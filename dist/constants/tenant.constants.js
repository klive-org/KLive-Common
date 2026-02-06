"use strict";
/**
 * Tenant-related constants for Multi-Tenant architecture
 *
 * @module constants/tenant
 * @since Phase 2 - Multi-Tenant Refactoring
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYSTEM_ROOMS = exports.TENANT_BROADCAST_PREFIX = exports.TENANT_ROOM_TYPES = exports.DEFAULT_TENANT_SLUG = exports.TENANT_HEADER_NAME = void 0;
/**
 * HTTP Header name used to pass the tenant slug in requests
 * Used by both frontend (setting) and backend (reading)
 */
exports.TENANT_HEADER_NAME = "X-Tenant-Slug";
/**
 * Default tenant slug for backward compatibility
 * Used when no tenant is specified (migration period)
 */
exports.DEFAULT_TENANT_SLUG = "default";
/**
 * Room type prefixes for tenant-aware Socket.IO rooms
 *
 * Pattern: {tenantSlug}:{ROOM_TYPE}:{resourceId}
 * Example: acme:CONVERSATION:abc123
 */
exports.TENANT_ROOM_TYPES = {
    /** System-level rooms (e.g., agent online status) */
    SYSTEM: "SYSTEM",
    /** Conversation rooms */
    CONVERSATION: "CONVERSATION",
    /** Agent-specific rooms */
    AGENT: "AGENT",
    /** Visitor-specific rooms */
    VISITOR: "VISITOR",
    /** Group rooms */
    GROUP: "GROUP",
};
/**
 * Tenant broadcast room prefix
 * Pattern: TENANT:{tenantSlug}
 */
exports.TENANT_BROADCAST_PREFIX = "TENANT";
/**
 * System sub-room identifiers
 */
exports.SYSTEM_ROOMS = {
    AGENTS_ONLINE: "agents-online",
    MONITORING: "monitoring",
    ALL_CONVERSATIONS: "all-conversations",
};
