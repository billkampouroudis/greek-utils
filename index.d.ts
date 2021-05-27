declare module 'greek-utils' {
  /**
   * Takes a greek text and removes the diacritics.
   * @param {*} greekText
   * @returns {string} The sanitized text
   */
  export function sanitize(greekText: string): string;
  
  /**
   * Takes a greek text and converts it to latin.
   * @param {*} greekText
   * @returns {string} The latin equilevant
   */
  export function toLatin(greekText: string): string;
}
