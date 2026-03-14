/**
 * Trạng thái hoạt động của agent — lưu trong DB.
 * Dùng cho API validation, DB schema, và business logic.
 *
 * LƯU Ý: "offline" và "online" KHÔNG nằm trong enum này
 * vì chúng là trạng thái phái sinh từ socket connection.
 */
export declare enum EUserStatus {
    BUSY = "busy",
    AWAY = "away",
    NOT_AVAILABLE = "busy",
    AVAILABLE = "available",
    STANDBY = "standby"
}
