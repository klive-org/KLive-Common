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
export const TENANT_HEADER_NAME = "X-Tenant-Slug";

/**
 * Default tenant slug for backward compatibility
 * Used when no tenant is specified (migration period)
 */
export const DEFAULT_TENANT_SLUG = "default";

/**
 * Room type prefixes for tenant-aware Socket.IO rooms
 *
 * Pattern: {tenantSlug}:{ROOM_TYPE}:{resourceId}
 * Example: acme:CONVERSATION:abc123
 */
export const TENANT_ROOM_TYPES = {
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
} as const;

/** Type for room type values */
export type TenantRoomType = (typeof TENANT_ROOM_TYPES)[keyof typeof TENANT_ROOM_TYPES];

/**
 * Tenant broadcast room prefix
 * Pattern: TENANT:{tenantSlug}
 */
export const TENANT_BROADCAST_PREFIX = "TENANT";

/**
 * System sub-room identifiers
 */
export const SYSTEM_ROOMS = {
  AGENTS_ONLINE: "agents-online",
  MONITORING: "monitoring",
  ALL_CONVERSATIONS: "all-conversations",
  CHAT_CONVERSATIONS: "chat-conversations",
} as const;
