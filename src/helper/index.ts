import { PACKAGE_NAME } from "../constants";
export const isBrowser = typeof window === "object" && typeof window.document === "object";

/**
 * isNode
 * @description 是否在node环境
 */
export const isNode = typeof process !== "undefined" && !!process.versions && !!process.versions.node;

export const libWarn = (text: string) => `[${PACKAGE_NAME} warning] ${text}`;

export const libError = (text: string) => `[${PACKAGE_NAME} error] ${text}`;