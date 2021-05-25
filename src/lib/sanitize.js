import { mapGreekSanitized } from '../mappings/mapGreekSanitized';

/**
 * Takes a greek text and removes the diacritics.
 * @param {*} greekText
 * @returns {string} The sanitized text
 */
export default function sanitize(greekText) {
  let sanitizedText = '';

  for (let char of greekText) {
    const index = mapGreekSanitized.findIndex(item => item.from === char);

    if (index >= 0) {
      sanitizedText += mapGreekSanitized[index].to;
    } else {
      sanitizedText += char;
    }
  }

  return sanitizedText;
}
