// utils/countries.ts
export interface Country {
    name: string;
    code: string;
    flag: string;
    phoneLength: number;
    placeholder: string;
  }
  
  export const countries: Country[] = [
    {
      name: 'India',
      code: '+91',
      flag: '🇮🇳',
      phoneLength: 10,
      placeholder: 'Enter mobile number'
    },
    {
      name: 'United States',
      code: '+1',
      flag: '🇺🇸',
      phoneLength: 10,
      placeholder: 'Enter phone number'
    },
    {
      name: 'United Kingdom',
      code: '+44',
      flag: '🇬🇧',
      phoneLength: 10,
      placeholder: 'Enter mobile number'
    },
    {
      name: 'Brazil',
      code: '+55',
      flag: '🇧🇷',
      phoneLength: 11,
      placeholder: 'Enter celular number'
    },
    {
      name: 'Germany',
      code: '+49',
      flag: '🇩🇪',
      phoneLength: 11,
      placeholder: 'Enter handynummer'
    },
    {
      name: 'France',
      code: '+33',
      flag: '🇫🇷',
      phoneLength: 10,
      placeholder: 'Enter numéro mobile'
    },
    {
      name: 'Australia',
      code: '+61',
      flag: '🇦🇺',
      phoneLength: 9,
      placeholder: 'Enter mobile number'
    },
    {
      name: 'Canada',
      code: '+1',
      flag: '🇨🇦',
      phoneLength: 10,
      placeholder: 'Enter phone number'
    },
    {
      name: 'Japan',
      code: '+81',
      flag: '🇯🇵',
      phoneLength: 11,
      placeholder: 'Enter phone number'
    },
    {
      name: 'South Korea',
      code: '+82',
      flag: '🇰🇷',
      phoneLength: 11,
      placeholder: 'Enter phone number'
    }
  ];
  
  export const getCountryByCode = (code: string): Country | undefined => {
    return countries.find(country => country.code === code);
  };
  
  export const formatPhoneNumber = (value: string, maxLength: number): string => {
    const digits = value.replace(/\D/g, '');
    return digits.slice(0, maxLength);
  };