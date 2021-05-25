import mapGreekSanitized from '../../src/mappings/mapGreekSanitized';

const mockMapGreekSanitized = [
  { from: 'ά', to: 'α' },
  { from: 'Ά', to: 'Α' },
  { from: 'έ', to: 'ε' },
  { from: 'Έ', to: 'Ε' },
  { from: 'ή', to: 'η' },
  { from: 'Ή', to: 'Η' },
  { from: 'Ί', to: 'Ι' },
  { from: 'Ϊ', to: 'Ι' },
  { from: 'ί', to: 'ι' },
  { from: 'ϊ', to: 'ι' },
  { from: 'ΐ', to: 'ι' },
  { from: 'Ό', to: 'Ο' },
  { from: 'ό', to: 'ο' },
  { from: 'Ύ', to: 'Υ' },
  { from: 'Ϋ', to: 'Υ' },
  { from: 'ΰ', to: 'υ' },
  { from: 'ϋ', to: 'υ' },
  { from: 'ύ', to: 'υ' },
  { from: 'Ώ', to: 'ω' },
  { from: 'ώ', to: 'ω' }
];

describe('Checks if the dictionary of sanitized letters contains the correct data', () => {
  it('Should check if the actual dictionary is the same with the mock dictionary', () => {
    expect(JSON.stringify(mapGreekSanitized)).toBe(JSON.stringify(mockMapGreekSanitized));
  });
});
