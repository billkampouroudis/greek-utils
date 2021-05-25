const auToAv = [
  'α', 'Α', 'ά', 'Ά',
  'γ', 'Γ',
  'δ', 'Δ',
  'λ', 'Λ',
  'μ', 'Μ',
  'ν', 'Ν',
  'ρ', 'Ρ',
  'σμ', 'Σμ', 'ΣΜ',
  'ω', 'Ω', 'ώ', 'Ώ',
  'ομαι', 'όμαι', 'OMAI'
];

const auToAf = [
  'θ', 'Θ',
  'κ', 'Κ',
  'ξ', 'Ξ',
  'π', 'Π',
  'σ', 'Σ',
  'στ', 'Στ', 'ΣΤ',
  'στρ', 'Στρ', 'ΣΤΡ',
  'τ', 'Τ',
  'χ', 'Χ'
];

const euToEv = [
  'α', 'Α', 'ά', 'Ά',
  'ε', 'Ε', 'έ', 'Έ',
  'η', 'Η', 'ή', 'Ή',
  'ο', 'Ο', 'ό', 'Ό',
  'ω', 'Ω', 'ώ', 'Ώ',
  'γ', 'Γ',
  'δ', 'Δ',
  'ζ', 'Ζ',
  'λ', 'Λ',
  'μ', 'Μ',
  'ν', 'Ν',
  'ρ', 'Ρ'
];

const euToEf = [
  'θ', 'Θ',
  'κ', 'Κ',
  'ξ', 'Ξ',
  'π', 'Π',
  'σ', 'Σ',
  'τ', 'Τ',
  'φ', 'Φ',
  'χ', 'Χ'
];

const mapGreekToLatin = [
  { from: 'αυ', to: 'av', next: auToAv },
  { from: 'αύ', to: 'av', next: auToAv },
  { from: 'Αυ', to: 'Av', next: auToAv },
  { from: 'Αύ', to: 'Av', next: auToAv },
  { from: 'ΑΥ', to: 'AV', next: auToAv },

  { from: 'αυ', to: 'af', next: auToAf },
  { from: 'αύ', to: 'af', next: auToAf },
  { from: 'Αυ', to: 'Af', next: auToAf },
  { from: 'Αύ', to: 'Af', next: auToAf },
  { from: 'ΑΥ', to: 'AF', next: auToAf },

  { from: 'ευ', to: 'ev', next: euToEv },
  { from: 'εύ', to: 'ev', next: euToEv },
  { from: 'Ευ', to: 'Ev', next: euToEv },
  { from: 'Εύ', to: 'Ev', next: euToEv },
  { from: 'ΕΥ', to: 'EV', next: euToEv },

  { from: 'ευ', to: 'ef', next: euToEf },
  { from: 'εύ', to: 'ef', next: euToEf },
  { from: 'Ευ', to: 'Ef', next: euToEf },
  { from: 'Εύ', to: 'Ef', next: euToEf },
  { from: 'ΕΥ', to: 'EF', next: euToEf },

  { from: 'αι', to: 'e' },
  { from: 'Αι', to: 'E' },
  { from: 'ΑΙ', to: 'E' },
  { from: 'αί', to: 'e' },
  { from: 'Αί', to: 'E' },
  { from: 'ΑΙ', to: 'E' },

  { from: 'ου', to: 'ou' },
  { from: 'ού', to: 'ou' },
  { from: 'οϋ', to: 'oy' },
  { from: 'οΰ', to: 'oy' },
  { from: 'Ου', to: 'Ou' },
  { from: 'Ού', to: 'Ou' },
  { from: 'Οϋ', to: 'Oy' },
  { from: 'Οΰ', to: 'Oy' },
  { from: 'ΟΥ', to: 'OY' },

  { from: 'ει', to: 'i' },
  { from: 'Ει', to: 'I' },
  { from: 'εί', to: 'i' },
  { from: 'Εί', to: 'I' },

  { from: 'οι', to: 'i' },
  { from: 'Οι', to: 'I' },
  { from: 'οί', to: 'i' },
  { from: 'Οί', to: 'I' },

  { from: 'Α', to: 'A' },
  { from: 'α', to: 'a' },
  { from: 'ά', to: 'a' },
  { from: 'Ά', to: 'A' },
  { from: 'Β', to: 'V' },
  { from: 'β', to: 'v' },
  { from: 'Γ', to: 'G' },
  { from: 'γ', to: 'g' },
  { from: 'Δ', to: 'D' },
  { from: 'δ', to: 'd' },
  { from: 'Ε', to: 'E' },
  { from: 'ε', to: 'e' },
  { from: 'έ', to: 'e' },
  { from: 'Έ', to: 'E' },
  { from: 'Ζ', to: 'Z' },
  { from: 'ζ', to: 'z' },
  { from: 'Η', to: 'I' },
  { from: 'η', to: 'i' },
  { from: 'ή', to: 'i' },
  { from: 'Ή', to: 'I' },
  { from: 'Θ', to: 'Th' },
  { from: 'θ', to: 'th' },
  { from: 'Ι', to: 'I' },
  { from: 'Ϊ', to: 'I' },
  { from: 'ι', to: 'i' },
  { from: 'ί', to: 'i' },
  { from: 'ΐ', to: 'i' },
  { from: 'ϊ', to: 'i' },
  { from: 'Ί', to: 'I' },
  { from: 'Κ', to: 'K' },
  { from: 'κ', to: 'k' },
  { from: 'Λ', to: 'L' },
  { from: 'λ', to: 'l' },
  { from: 'Μ', to: 'M' },
  { from: 'μ', to: 'm' },
  { from: 'Ν', to: 'N' },
  { from: 'ν', to: 'n' },
  { from: 'Ξ', to: 'Ks' },
  { from: 'ξ', to: 'ks' },
  { from: 'Ο', to: 'O' },
  { from: 'ο', to: 'o' },
  { from: 'Ό', to: 'O' },
  { from: 'ό', to: 'o' },
  { from: 'Π', to: 'P' },
  { from: 'π', to: 'p' },
  { from: 'Ρ', to: 'R' },
  { from: 'ρ', to: 'r' },
  { from: 'Σ', to: 'S' },
  { from: 'σ', to: 's' },
  { from: 'Τ', to: 'T' },
  { from: 'τ', to: 't' },
  { from: 'Υ', to: 'Y' },
  { from: 'Ύ', to: 'Y' },
  { from: 'Ϋ', to: 'Y' },
  { from: 'ΰ', to: 'y' },
  { from: 'ύ', to: 'y' },
  { from: 'ϋ', to: 'y' },
  { from: 'υ', to: 'y' },
  { from: 'Φ', to: 'F' },
  { from: 'φ', to: 'f' },
  { from: 'Χ', to: 'Ch' },
  { from: 'χ', to: 'ch' },
  { from: 'Ψ', to: 'Ps' },
  { from: 'ψ', to: 'ps' },
  { from: 'Ω', to: 'O' },
  { from: 'ω', to: 'o' },
  { from: 'Ώ', to: 'o' },
  { from: 'ώ', to: 'o' },
  { from: 'ς', to: 's' },
  { from: ';', to: '?' }
];

export default mapGreekToLatin;
