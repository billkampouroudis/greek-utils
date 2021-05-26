import toLatin from '../../src/lib/toLatin';

describe('Checks if the conversion is done properly', () => {
  it('Should transliterate all greek character with the respective latin ones', () => {
    expect(
      toLatin('Με την υπηρεσία τηλεσυνεδρίας Dr. Button μπορείτε να δείτε έναν γιατρό, online, μέσα σε λίγα λεπτά. Ο γιατρός θα εξετάσει το αίτημά σας και θα σας δώσει τις απαραίτητες κατευθύνσεις.')
    ).toBe('Me tin ypiresia tilesynedrias Dr. Button mporite na dite enan giatro, online, mesa se liga lepta. O giatros tha eksetasi to etima sas ke tha sas dosi tis aparetites katefthynsis.');
  });

  it('Should convert the name "Αυγή" to "Avgi"', () => {
    expect(toLatin('Αυγή')).toBe('Avgi');
  });

  it('Should convert the name "Αριστείδης" to "Aristidis"', () => {
    expect(toLatin('Αριστείδης')).toBe('Aristidis');
  });

  it('Should convert the name "Ευγένιος" to "Evgenios"', () => {
    expect(toLatin('Ευγένιος')).toBe('Evgenios');
  });

  it('Should convert the name "Σταύρος" to "Stavros"', () => {
    expect(toLatin('Σταύρος')).toBe('Stavros');
  });

  it('Should convert the name "Ηλιάνα" to "Iliana"', () => {
    expect(toLatin('Ηλιάνα')).toBe('Iliana');
  });

  it('Should convert the name "Ειρήνη" to "Irini"', () => {
    expect(toLatin('Ειρήνη')).toBe('Irini');
  });

  it('Should convert the name "Ελευθερία" to "Eleftheria"', () => {
    expect(toLatin('Ελευθερία')).toBe('Eleftheria');
  });

  it('Should convert the phrase "Κατά φωνή κι ο γάιδαρος" to "Kata foni ki o gaidaros"', () => {
    expect(toLatin('Κατά φωνή κι ο γάιδαρος')).toBe('Kata foni ki o gaidaros');
  });

  it('Should return when no text is provided', () => {
    expect(toLatin()).toBe('');
  });
});
