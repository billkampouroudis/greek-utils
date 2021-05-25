import sanitize from '../../src/lib/sanitize';

describe('Checks if the sanitization is done properly', () => {
  it('Should remove accents and diatritics from the given text', () => {
    expect(
      sanitize('Η Dr. Button παρέχει εφαρμογές τηλεϊατρικής, προσεκτικά σχεδιασμένες για τις απαιτήσεις των ιατρικών επισκέψεων.')
    ).toBe('Η Dr. Button παρεχει εφαρμογες τηλειατρικης, προσεκτικα σχεδιασμενες για τις απαιτησεις των ιατρικων επισκεψεων.');
  });
});
