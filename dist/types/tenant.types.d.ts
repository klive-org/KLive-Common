/**
 * Multi-Tenant Types for KLive Platform
 *
 * These types define the tenant-related interfaces shared between
 * Frontend and Backend applications.
 *
 * @module types/tenant
 * @since Phase 2 - Multi-Tenant Refactoring
 */
/**
 * Tenant basic information
 * Represents the core tenant entity
 *
 * @note Internal fields (redisDbIndex, databaseUri) are NOT included
 *       to prevent exposure to frontend
 */
export interface ITenant {
    /** Unique identifier (MongoDB ObjectId) */
    id: string;
    /** URL-safe slug (e.g., "tenant-a", "company-xyz") */
    slug: string;
    /** Display name of the tenant/company */
    name: string;
    /** Whether the tenant is currently active */
    isActive: boolean;
}
/**
 * Extended tenant information for admin dashboards
 * Only used in admin-level APIs
 */
export interface ITenantAdmin extends ITenant {
    /** Allowed domains for this tenant */
    domains: string[];
    /** Created timestamp (Unix) */
    createdAt: number;
    /** Last updated timestamp (Unix) */
    updatedAt: number;
}
/**
 * Tenant context in request
 * Used for passing tenant info between layers
 *
 * @note This is for internal use, not exposed in API responses
 */
export interface ITenantContext {
    /** Tenant slug identifier */
    tenantSlug: string;
    /** Tenant MongoDB ObjectId */
    tenantId: string;
}
/**
 * Tenant header configuration
 * Defines how tenant is identified in HTTP requests
 */
export interface ITenantHeader {
    /** Header name for tenant slug */
    headerName: "X-Tenant-Slug";
    /** The tenant slug value */
    value: string;
}
/**
 * File metadata in API responses
 * SECURITY: Does NOT include tenant prefix or internal S3 keys
 *
 * The tenant prefix (e.g., "tenant_a/uploads/file.jpg") is injected
 * at runtime by S3Service based on current tenant context
 */
export interface IFileMetadata {
    /** File unique identifier */
    id: string;
    /** Storage filename (e.g., "abc123.jpg") */
    filename: string;
    /** Original upload filename (e.g., "my_photo.jpg") */
    originalName: string;
    /** MIME type (e.g., "image/jpeg") */
    mimeType: string;
    /** File size in bytes */
    size: number;
    /** Upload timestamp (Unix) */
    uploadedAt: number;
}
/**
 * File upload response
 * SECURITY: Only returns CDN URL, not internal S3 paths
 */
export interface IFileUploadResponse {
    /** File unique identifier */
    id: string;
    /** Public CDN URL for accessing the file */
    url: string;
    /** Original filename preserved */
    originalName: string;
    /** MIME type */
    mimeType: string;
    /** File size in bytes */
    size: number;
}
/**
 * Internal file representation with tenant prefix
 * ONLY used internally by backend services
 *
 * @internal - Do not export to frontend
 */
export interface ITenantFile {
    /** Original filename (abc123.jpg) */
    key: string;
    /** Full S3 path with tenant prefix (tenant_a/abc123.jpg) */
    fullPath: string;
    /** Tenant slug */
    tenantSlug: string;
}
/**
 * Standard API response wrapper
 * All tenant-aware endpoints should use this
 */
export interface ITenantApiResponse<T> {
    /** Response success status */
    success: boolean;
    /** Response data (null on error) */
    data: T | null;
    /** Error message (null on success) */
    error: string | null;
    /** Response timestamp (Unix) */
    timestamp: number;
}
/**
 * Paginated response for tenant-scoped lists
 */
export interface ITenantPaginatedResponse<T> {
    /** Array of items */
    items: T[];
    /** Total count across all pages */
    total: number;
    /** Current page (1-indexed) */
    page: number;
    /** Items per page */
    limit: number;
    /** Whether there are more pages */
    hasMore: boolean;
}
