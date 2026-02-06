"use strict";
/**
 * Tenant-aware room utilities for Socket.IO
 *
 * All room names MUST have tenant prefix to ensure isolation.
 * Pattern: {tenantSlug}:{ROOM_TYPE}:{resourceId}
 *
 * @module utils/tenant-room
 * @since Phase 2 - Multi-Tenant Refactoring
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEffectiveTenantSlug = exports.isRoomBelongsToTenant = exports.parseTenantFromRoom = exports.getTenantBroadcastRoom = exports.getVisitorRoomWithTenant = exports.getConversationRoomWithTenant = exports.getAgentRoomWithTenant = exports.getSystemAllConversationsRoom = exports.getSystemMonitoringRoom = exports.getSystemAgentsOnlineRoom = exports.getTenantRoom = void 0;
const tenant_constants_1 = require("../constants/tenant.constants");
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
const getTenantRoom = (tenantSlug, type, id) => {
    return `${tenantSlug}:${type}:${id}`;
};
exports.getTenantRoom = getTenantRoom;
/**
 * Get the system agents-online room for a tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:agents-online"
 */
const getSystemAgentsOnlineRoom = (tenantSlug) => {
    return (0, exports.getTenantRoom)(tenantSlug, tenant_constants_1.TENANT_ROOM_TYPES.SYSTEM, tenant_constants_1.SYSTEM_ROOMS.AGENTS_ONLINE);
};
exports.getSystemAgentsOnlineRoom = getSystemAgentsOnlineRoom;
/**
 * Get the system monitoring room for a tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:monitoring"
 */
const getSystemMonitoringRoom = (tenantSlug) => {
    return (0, exports.getTenantRoom)(tenantSlug, tenant_constants_1.TENANT_ROOM_TYPES.SYSTEM, tenant_constants_1.SYSTEM_ROOMS.MONITORING);
};
exports.getSystemMonitoringRoom = getSystemMonitoringRoom;
/**
 * Get the all-conversations room for a tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "{tenant}:SYSTEM:all-conversations"
 */
const getSystemAllConversationsRoom = (tenantSlug) => {
    return (0, exports.getTenantRoom)(tenantSlug, tenant_constants_1.TENANT_ROOM_TYPES.SYSTEM, tenant_constants_1.SYSTEM_ROOMS.ALL_CONVERSATIONS);
};
exports.getSystemAllConversationsRoom = getSystemAllConversationsRoom;
/**
 * Get the agent-specific room with tenant prefix
 *
 * @param tenantSlug - Tenant slug
 * @param agentId - Agent/User ID
 * @returns Room name: "{tenant}:AGENT:{agentId}"
 */
const getAgentRoomWithTenant = (tenantSlug, agentId) => {
    return (0, exports.getTenantRoom)(tenantSlug, tenant_constants_1.TENANT_ROOM_TYPES.AGENT, agentId);
};
exports.getAgentRoomWithTenant = getAgentRoomWithTenant;
/**
 * Get the conversation room with tenant prefix
 *
 * @param tenantSlug - Tenant slug
 * @param conversationId - Conversation ID
 * @returns Room name: "{tenant}:CONVERSATION:{conversationId}"
 */
const getConversationRoomWithTenant = (tenantSlug, conversationId) => {
    return (0, exports.getTenantRoom)(tenantSlug, tenant_constants_1.TENANT_ROOM_TYPES.CONVERSATION, conversationId);
};
exports.getConversationRoomWithTenant = getConversationRoomWithTenant;
/**
 * Get the visitor room with tenant prefix
 *
 * @param tenantSlug - Tenant slug
 * @param visitorId - Visitor ID
 * @returns Room name: "{tenant}:VISITOR:{visitorId}"
 */
const getVisitorRoomWithTenant = (tenantSlug, visitorId) => {
    return (0, exports.getTenantRoom)(tenantSlug, tenant_constants_1.TENANT_ROOM_TYPES.VISITOR, visitorId);
};
exports.getVisitorRoomWithTenant = getVisitorRoomWithTenant;
/**
 * Get the broadcast room for an entire tenant
 *
 * @param tenantSlug - Tenant slug
 * @returns Room name: "TENANT:{tenant}"
 */
const getTenantBroadcastRoom = (tenantSlug) => {
    return `${tenant_constants_1.TENANT_BROADCAST_PREFIX}:${tenantSlug}`;
};
exports.getTenantBroadcastRoom = getTenantBroadcastRoom;
/**
 * Parse tenant slug from a room name
 *
 * @param roomName - Room name with tenant prefix (e.g., "acme:CONVERSATION:123")
 * @returns Tenant slug or null if cannot be parsed
 */
const parseTenantFromRoom = (roomName) => {
    const parts = roomName.split(":");
    if (parts.length < 2)
        return null;
    // If first part is a reserved type, it's not a tenant prefix
    const reservedPrefixes = [tenant_constants_1.TENANT_BROADCAST_PREFIX, ...Object.values(tenant_constants_1.TENANT_ROOM_TYPES)];
    if (reservedPrefixes.includes(parts[0])) {
        return null;
    }
    return parts[0];
};
exports.parseTenantFromRoom = parseTenantFromRoom;
/**
 * Check if a room belongs to a specific tenant
 *
 * @param roomName - Room name to check
 * @param tenantSlug - Tenant slug to verify
 * @returns true if room belongs to the tenant
 */
const isRoomBelongsToTenant = (roomName, tenantSlug) => {
    return roomName.startsWith(`${tenantSlug}:`) || roomName === (0, exports.getTenantBroadcastRoom)(tenantSlug);
};
exports.isRoomBelongsToTenant = isRoomBelongsToTenant;
/**
 * Get effective tenant slug with fallback for backward compatibility
 *
 * @param tenantSlug - Possibly undefined tenant slug
 * @returns The tenant slug or DEFAULT_TENANT_SLUG
 */
const getEffectiveTenantSlug = (tenantSlug) => {
    return tenantSlug || tenant_constants_1.DEFAULT_TENANT_SLUG;
};
exports.getEffectiveTenantSlug = getEffectiveTenantSlug;
