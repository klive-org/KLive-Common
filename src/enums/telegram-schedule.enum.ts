export enum EScheduleStatus {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export enum EScheduleType {
  ONE_TIME = "ONE_TIME",
  RECURRING = "RECURRING",
}

export enum EMessageSource {
  TEXT = "TEXT",
  TEMPLATE = "TEMPLATE",
}

export enum ERecurrenceMode {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  CUSTOM_CRON = "CUSTOM_CRON",
  FIXED_INTERVAL = "FIXED_INTERVAL",
}

export enum ERunStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  DONE = "DONE",
  FAILED = "FAILED",
}
