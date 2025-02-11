import { extensionBrowser } from './chrome';
import { getBaseSupportedNetworks } from './types/network';

export function isFromExtension(origin: string): boolean {
  const s = origin.split('://');
  return s[0] === 'chrome-extension' && s[1] === extensionBrowser.runtime.id;
}

/**
 * removeEmpty gets a dictionary and removes empty values
 * @param obj
 * @returns {*}
 */
export function removeEmptyFields(obj: { [index: string]: any }): any {
  Object.keys(obj).forEach((key: string) => {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null || obj[key] === undefined || obj[key].length === 0) delete obj[key];
    }
  });
  return obj;
}

/**
 * Check if a network belongs to our base supported network (e.g: links to DappFlow)
 * @param network 
 * @returns boolean
 */
export function isBaseSupportedNetwork(network: string): boolean {
  return getBaseSupportedNetworks().map((l) => l.name.toLowerCase()).includes(network.toLowerCase());
}

/**
 * Converts full addresses into a shorter format:
 * AAAAAAAAAA.....AAAAAAAAAA
 * @param address 
 * @returns string
 */
export function obfuscateAddress(address: string, range: number = 10): string {
  return `${address.slice(0, range)}.....${address.slice(-range)}`;
}

/**
 * Compares to buffers to make sure it's contents match
 * Useful for validating groups or other msgpack encoded data
 * @param b1 first buffer to compare
 * @param b2 second buffer to compare
 * @returns boolean
 */
export function areBuffersEqual(b1: Uint8Array, b2: Uint8Array): boolean {
  return b1.every((value, index) => b2[index] === value);
}