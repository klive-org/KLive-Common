/**
 * Trạng thái hoạt động của agent — được lưu trong DB.
 * Dùng cho API validation, DB schema, và business logic.
 *
 * LƯU Ý: Giá trị "offline" KHÔNG nằm trong enum này
 * vì offline là trạng thái phái sinh từ socket connection.
 */
export declare enum EUserStatus {
    BUSY = "busy",
    AWAY = "away",
    AVAILABLE = "available"
}
/**
 * Trạng thái hiển thị mở rộng — bao gồm derived states.
 * Dùng cho UI components, socket events, và monitoring APIs.
 *
 * Bao gồm tất cả giá trị từ EUserStatus + các trạng thái connection:
 * - OFFLINE: agent mất kết nối socket hoàn toàn
 * - ONLINE: agent đang kết nối (alias cho AVAILABLE ở một số context)
 */
export declare enum EUserDisplayStatus {
    BUSY = "busy",
    AWAY = "away",
    AVAILABLE = "available",
    OFFLINE = "offline",
    ONLINE = "online"
}
