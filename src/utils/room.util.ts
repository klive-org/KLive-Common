import { ROOM_PREFIX_AGENT, ROOM_PREFIX_CONVERSATION } from "../constants/room.constants";

/**
 * Tạo room name cho agent với prefix AGENT:
 */
export const getAgentRoom = (agentId: string): string => {
  return `${ROOM_PREFIX_AGENT}${agentId}`;
};

/**
 * Tạo room name cho conversation với prefix CONVERSATION:
 */
export const getConversationRoom = (conversationId: string): string => {
  return `${ROOM_PREFIX_CONVERSATION}${conversationId}`;
};
