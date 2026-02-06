/**
 * Tenant-aware room utilities for Socket.IO
 *
 * All room names MUST have tenant prefix to ensure isolation.
 * Pattern: {tenantSlug}:{ROOM_TYPE}:{resourceId}
 *
 * @module utils/tenant-room
 * @since Phase 2 - Multi-Tenant Refactoring
 */

import {
  DEFAULT_TENANT_SLUG,
  SYSTEM_ROOMS,
  TENANT_BROADCAST_PREFIX,
  TENANT_ROOM_TYPES,
  type TenantRoomType,
} from "../constants/tenant.constants";

/**
 * Create a tenant-prefixed room name
 *
 * @param tenantSlug - Tenant slug (e.g., "acme", "default")
 * @param type - Room type (SYSTEM, CONVERSATION, AGENT, VISITOR, GROUP)
 * @param id - Resource identifier
 * @returns Room name with tenant prefix
 *
 * @example
 * getTenantRoom("acme", "CONVERSATION", "abc123")
 * // Returns: "acme:CONVERSATION:abc123"
 */
export const getTenantRoom = (tenantSlug: string, type: TenantRoomType, id: string): string => {
  return `${tenantSlug}:${type}:${id}`;
};

/**
 * Get the system agents-online room for a tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:agents-online"
 */
export const getSystemAgentsOnlineRoom = (tenantSlug: string): string => {
  return getTenantRoom(tenantSlug, TENANT_ROOM_TYPES.SYSTEM, SYSTEM_ROOMS.AGENTS_ONLINE);
};

/**
 * Get the system monitoring room for a tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:monitoring"
 */
export const getSystemMonitoringRoom = (tenantSlug: string): string => {
  return getTenantRoom(tenantSlug, TENANT_ROOM_TYPES.SYSTEM, SYSTEM_ROOMS.MONITORING);
};

/**
 * Get the all-conversations room for a tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:all-conversations"
 */
export const getSystemAllConversationsRoom = (tenantSlug: string): string => {
  return getTenantRoom(tenantSlug, TENANT_ROOM_TYPES.SYSTEM, SYSTEM_ROOMS.ALL_CONVERSATIONS);
};

/**
 * Get the agent-specific room with tenant prefix
 *
 * @param tenantSlug - Tenant slug
 * @param agentId - Agent/User ID
 * @returns Room name: "{tenant}:AGENT:{agentId}"
 */
export const getAgentRoomWithTenant = (tenantSlug: string, agentId: string): string => {
  return getTenantRoom(tenantSlug, TENANT_ROOM_TYPES.AGENT, agentId);
};

/**
 * Get the conversation room with tenant prefix
 *
 * @param tenantSlug - Tenant slug
 * @param conversationId - Conversation ID
 * @returns Room name: "{tenant}:CONVERSATION:{conversationId}"
 */
export const getConversationRoomWithTenant = (tenantSlug: string, conversationId: string): string => {
  return getTenantRoom(tenantSlug, TENANT_ROOM_TYPES.CONVERSATION, conversationId);
};

/**
 * Get the visitor room with tenant prefix
 *
 * @param tenantSlug - Tenant slug
 * @param visitorId - Visitor ID
 * @returns Room name: "{tenant}:VISITOR:{visitorId}"
 */
export const getVisitorRoomWithTenant = (tenantSlug: string, visitorId: string): string => {
  return getTenantRoom(tenantSlug, TENANT_ROOM_TYPES.VISITOR, visitorId);
};

/**
 * Get the broadcast room for an entire tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "TENANT:{tenant}"
 */
export const getTenantBroadcastRoom = (tenantSlug: string): string => {
  return `${TENANT_BROADCAST_PREFIX}:${tenantSlug}`;
};

/**
 * Parse tenant slug from a room name
 *
 * @param roomName - Room name with tenant prefix (e.g., "acme:CONVERSATION:123")
 * @returns Tenant slug or null if cannot be parsed
 */
export const parseTenantFromRoom = (roomName: string): string | null => {
  const parts = roomName.split(":");
  if (parts.length < 2) return null;

  // If first part is a reserved type, it's not a tenant prefix
  const reservedPrefixes = [TENANT_BROADCAST_PREFIX, ...Object.values(TENANT_ROOM_TYPES)];

  if (reservedPrefixes.includes(parts[0] as TenantRoomType)) {
    return null;
  }

  return parts[0];
};

/**
 * Check if a room belongs to a specific tenant
 *
 * @param roomName - Room name to check
 * @param tenantSlug - Tenant slug to verify
 * @returns true if room belongs to the tenant
 */
export const isRoomBelongsToTenant = (roomName: string, tenantSlug: string): boolean => {
  return roomName.startsWith(`${tenantSlug}:`) || roomName === getTenantBroadcastRoom(tenantSlug);
};

/**
 * Get effective tenant slug with fallback for backward compatibility
 *
 * @param tenantSlug - Possibly undefined tenant slug
 * @returns The tenant slug or DEFAULT_TENANT_SLUG
 */
export const getEffectiveTenantSlug = (tenantSlug: string | undefined | null): string => {
  return tenantSlug || DEFAULT_TENANT_SLUG;
};
