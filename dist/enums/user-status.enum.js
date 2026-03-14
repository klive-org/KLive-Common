"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EUserDisplayStatus = exports.EUserStatus = void 0;
/**
 * Trạng thái hoạt động của agent — được lưu trong DB.
 * Dùng cho API validation, DB schema, và business logic.
 *
 * LƯU Ý: Giá trị "offline" KHÔNG nằm trong enum này
 * vì offline là trạng thái phái sinh từ socket connection.
 */
var EUserStatus;
(function (EUserStatus) {
    EUserStatus["BUSY"] = "busy";
    EUserStatus["AWAY"] = "away";
    EUserStatus["NOT_AVAILABLE"] = "busy";
    EUserStatus["AVAILABLE"] = "available";
    EUserStatus["STANDBY"] = "standby";
})(EUserStatus || (exports.EUserStatus = EUserStatus = {}));
/**
 * Trạng thái hiển thị mở rộng — bao gồm derived states.
 * Dùng cho UI components, socket events, và monitoring APIs.
 *
 * Bao gồm tất cả giá trị từ EUserStatus + các trạng thái connection:
 * - OFFLINE: agent mất kết nối socket hoàn toàn
 * - ONLINE: agent đang kết nối (alias cho AVAILABLE ở một số context)
 */
var EUserDisplayStatus;
(function (EUserDisplayStatus) {
    EUserDisplayStatus["BUSY"] = "busy";
    EUserDisplayStatus["NOT_AVAILABLE"] = "busy";
    EUserDisplayStatus["AWAY"] = "away";
    EUserDisplayStatus["AVAILABLE"] = "available";
    EUserDisplayStatus["OFFLINE"] = "offline";
    EUserDisplayStatus["ONLINE"] = "online";
    EUserDisplayStatus["STANDBY"] = "standby";
})(EUserDisplayStatus || (exports.EUserDisplayStatus = EUserDisplayStatus = {}));
