import { mapGreekToLatin } from '../mappings/mapGreekToLatin';

/**
 * Takes a greek text and converts it to latin.
 * @param {*} greekText
 * @returns {string} The latin equilevant
 */
export default function toLatin(greekText = '') {
  let converted = greekText;

  for (let i = 0; i < mapGreekToLatin.length; i++) {
    const mapItem = mapGreekToLatin[i];

    if (mapItem.next) {
      for (let followingLetter of mapItem.next) {
        const reg = new RegExp(`${mapItem.from}${followingLetter}`);
        const match = reg.exec(converted);

        if (match !== null) {
          converted = converted.replaceAll(mapItem.from, mapItem.to);
        }
      }
    } else {
      converted = converted.replaceAll(mapItem.from, mapItem.to);
    }
  }

  return converted;
}
