/**
 * @deprecated Use ES2CEntityEvent.USER_CHANGED + UserAction
 * and ES2CSystemEvent.ERROR instead.
 * Sẽ bị xoá hoàn toàn ở version tiếp theo.
 */
export declare enum ES2CWSEvent {
    WS_ERROR_RESPONSE = "s2c:ws-error-response",
    RECV_USER_STATUS_CHANGED = "s2c:recv-user-status-changed",
    RECV_USER_OFFLINE = "s2c:recv-user-offline"
}
