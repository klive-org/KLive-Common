export declare enum EScheduleStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare enum EScheduleType {
    ONE_TIME = "ONE_TIME",
    RECURRING = "RECURRING"
}
export declare enum EMessageSource {
    TEXT = "TEXT",
    TEMPLATE = "TEMPLATE"
}
export declare enum ERecurrenceMode {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    CUSTOM_CRON = "CUSTOM_CRON",
    FIXED_INTERVAL = "FIXED_INTERVAL"
}
export declare enum ERunStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    DONE = "DONE",
    FAILED = "FAILED"
}
