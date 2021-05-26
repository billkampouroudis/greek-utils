import mapGreekToLatin from '../mappings/mapGreekToLatin';

/**
 * Takes a greek text and converts it to latin.
 * @param {*} greekText
 * @returns {string} The latin equilevant
 */
export default function toLatin(greekText = '') {
  let converted = greekText;

  for (let i = 0; i < mapGreekToLatin.length; i++) {
    const mapItem = mapGreekToLatin[i];

    // When the mapItem.next array exists, the next charater should be checked
    // in order to make the conversion correctly.
    if (mapItem.next) {
      for (const followingLetter of mapItem.next) {
        const reg = new RegExp(`${mapItem.from}${followingLetter}`);
        const match = reg.exec(converted);

        if (match !== null) {
          converted = converted.replace(new RegExp(mapItem.from, 'g'), mapItem.to);
        }
      }
    } else {
      converted = converted.replace(new RegExp(mapItem.from, 'g'), mapItem.to);
    }
  }

  return converted;
}
