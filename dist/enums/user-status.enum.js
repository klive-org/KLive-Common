"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EUserStatus = void 0;
/**
 * Trạng thái hoạt động của agent — lưu trong DB.
 * Dùng cho API validation, DB schema, và business logic.
 *
 * LƯU Ý: "offline" và "online" KHÔNG nằm trong enum này
 * vì chúng là trạng thái phái sinh từ socket connection.
 */
var EUserStatus;
(function (EUserStatus) {
    EUserStatus["BUSY"] = "busy";
    EUserStatus["AWAY"] = "away";
    EUserStatus["NOT_AVAILABLE"] = "busy";
    EUserStatus["AVAILABLE"] = "available";
    EUserStatus["STANDBY"] = "standby";
})(EUserStatus || (exports.EUserStatus = EUserStatus = {}));
