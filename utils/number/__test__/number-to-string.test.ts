import { numberToString } from '..';

const makeSut = () => ({
  sut: numberToString,
});

const io: ReadonlyArray<[number, string]> = [
  [1_000_000_000_000.0000000000001, '1000000000000'],
  [1_000_000_000_000.0000000001, '1000000000000'],
  [1_000_000_000_000.0000001, '1000000000000'],
  [1_000_000_000.0000001, '1000000000.0000001'],
  [1_000_000_000.01, '1000000000.01'],
  [1_000_000.01, '1000000.01'],
  [1000.01, '1000.01'],
  [1.01, '1.01'],
  [1.11, '1.11'],
  [0.01, '0.01'],
  [0.00001, '0.00001'],
  [0.00000001, '0.00000001'],
  [0.00000000001, '0.00000000001'],
  [0.00000000000001, '0.00000000000001'],
  [0.0000000000000001, '0.0000000000000001'],
  [0.000000000000000000001, '0.000000000000000000001'],
  [0.1, '0.1'],
  [0.12, '0.12'],
  [0.123, '0.123'],
  [0.1234, '0.1234'],
  [0.12345, '0.12345'],
  [0.123456, '0.123456'],
  [0.1234567, '0.1234567'],
  [0.12345678, '0.12345678'],
  [0.123456789, '0.123456789'],
  [0.12345678901, '0.12345678901'],
  [0.1234567890136435, '0.1234567890136435'],
  [0.1234567890136435456, '0.12345678901364354'],
];

describe(numberToString.name, () => {
  it.each(io)('should convert %f to %s', (input, output) => {
    const { sut } = makeSut();
    expect(sut(input)).toBe(output);
  });
});
