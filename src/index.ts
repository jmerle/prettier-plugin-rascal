import { Plugin } from 'prettier';
import { locEnd, locStart, parse } from './parser';
import { print } from './printer';

export const languages: Plugin['languages'] = [
  {
    name: 'rascal',
    parsers: ['rascal'],
    extensions: ['.rsc'],
    tmScope: 'source.rascal',
    aceMode: 'text',
    linguistLanguageId: 173616037,
  },
];

export const parsers: Plugin['parsers'] = {
  rascal: {
    parse,
    astFormat: 'rascal-ast',
    locStart,
    locEnd,
  },
};

export const printers: Plugin['printers'] = {
  'rascal-ast': {
    print,
  },
};
