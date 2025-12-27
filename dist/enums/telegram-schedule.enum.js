"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERunStatus = exports.ERecurrenceMode = exports.EMessageSource = exports.EScheduleType = exports.EScheduleStatus = void 0;
var EScheduleStatus;
(function (EScheduleStatus) {
    EScheduleStatus["DRAFT"] = "DRAFT";
    EScheduleStatus["ACTIVE"] = "ACTIVE";
    EScheduleStatus["PAUSED"] = "PAUSED";
    EScheduleStatus["COMPLETED"] = "COMPLETED";
    EScheduleStatus["CANCELLED"] = "CANCELLED";
})(EScheduleStatus || (exports.EScheduleStatus = EScheduleStatus = {}));
var EScheduleType;
(function (EScheduleType) {
    EScheduleType["ONE_TIME"] = "ONE_TIME";
    EScheduleType["RECURRING"] = "RECURRING";
})(EScheduleType || (exports.EScheduleType = EScheduleType = {}));
var EMessageSource;
(function (EMessageSource) {
    EMessageSource["TEXT"] = "TEXT";
    EMessageSource["TEMPLATE"] = "TEMPLATE";
})(EMessageSource || (exports.EMessageSource = EMessageSource = {}));
var ERecurrenceMode;
(function (ERecurrenceMode) {
    ERecurrenceMode["DAILY"] = "DAILY";
    ERecurrenceMode["WEEKLY"] = "WEEKLY";
    ERecurrenceMode["MONTHLY"] = "MONTHLY";
    ERecurrenceMode["CUSTOM_CRON"] = "CUSTOM_CRON";
    ERecurrenceMode["FIXED_INTERVAL"] = "FIXED_INTERVAL";
})(ERecurrenceMode || (exports.ERecurrenceMode = ERecurrenceMode = {}));
var ERunStatus;
(function (ERunStatus) {
    ERunStatus["PENDING"] = "PENDING";
    ERunStatus["PROCESSING"] = "PROCESSING";
    ERunStatus["DONE"] = "DONE";
    ERunStatus["FAILED"] = "FAILED";
})(ERunStatus || (exports.ERunStatus = ERunStatus = {}));
