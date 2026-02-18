/**
 * Tenant-aware room utilities for Socket.IO
 *
 * All room names MUST have tenant prefix to ensure isolation.
 * Pattern: {tenantSlug}:{ROOM_TYPE}:{resourceId}
 *
 * @module utils/tenant-room
 * @since Phase 2 - Multi-Tenant Refactoring
 */
import { type TenantRoomType } from "../constants/tenant.constants";
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
export declare const getTenantRoom: (tenantSlug: string, type: TenantRoomType, id: string) => string;
/**
 * Get the system agents-online room for a tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:agents-online"
 */
export declare const getSystemAgentsOnlineRoom: (tenantSlug: string) => string;
/**
 * Get the system monitoring room for a tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:monitoring"
 */
export declare const getSystemMonitoringRoom: (tenantSlug: string) => string;
/**
 * Get the all-conversations room for a tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:all-conversations"
 */
export declare const getSystemAllConversationsRoom: (tenantSlug: string) => string;
/**
 * Get the chat-conversations room for a tenant
 * Used by agents on the chat page to sync their in-progress conversation list
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:chat-conversations"
 */
export declare const getSystemChatConversationsRoom: (tenantSlug: string) => string;
/**
 * Get the agent-specific room with tenant prefix
 *
 * @param tenantSlug - Tenant slug
 * @param agentId - Agent/User ID
 * @returns Room name: "{tenant}:AGENT:{agentId}"
 */
export declare const getAgentRoomWithTenant: (tenantSlug: string, agentId: string) => string;
/**
 * Get the conversation room with tenant prefix
 *
 * @param tenantSlug - Tenant slug
 * @param conversationId - Conversation ID
 * @returns Room name: "{tenant}:CONVERSATION:{conversationId}"
 */
export declare const getConversationRoomWithTenant: (tenantSlug: string, conversationId: string) => string;
/**
 * Get the visitor room with tenant prefix
 *
 * @param tenantSlug - Tenant slug
 * @param visitorId - Visitor ID
 * @returns Room name: "{tenant}:VISITOR:{visitorId}"
 */
export declare const getVisitorRoomWithTenant: (tenantSlug: string, visitorId: string) => string;
/**
 * Get the broadcast room for an entire tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "TENANT:{tenant}"
 */
export declare const getTenantBroadcastRoom: (tenantSlug: string) => string;
/**
 * Parse tenant slug from a room name
 *
 * @param roomName - Room name with tenant prefix (e.g., "acme:CONVERSATION:123")
 * @returns Tenant slug or null if cannot be parsed
 */
export declare const parseTenantFromRoom: (roomName: string) => string | null;
/**
 * Check if a room belongs to a specific tenant
 *
 * @param roomName - Room name to check
 * @param tenantSlug - Tenant slug to verify
 * @returns true if room belongs to the tenant
 */
export declare const isRoomBelongsToTenant: (roomName: string, tenantSlug: string) => boolean;
/**
 * Get effective tenant slug with fallback for backward compatibility
 *
 * @param tenantSlug - Possibly undefined tenant slug
 * @returns The tenant slug or DEFAULT_TENANT_SLUG
 */
export declare const getEffectiveTenantSlug: (tenantSlug: string | undefined | null) => string;
