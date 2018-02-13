import { getFullMonth } from './calendar.helpers.js';

describe('getFullMonth tests', () => {
  it('0 is January', () => expect(getFullMonth('0')).toEqual('January'));
  it('1 is February', () => expect(getFullMonth('1')).toEqual('February'));
  it('2 is March', () => expect(getFullMonth('2')).toEqual('March'));
  it('3 is April', () => expect(getFullMonth('3')).toEqual('April'));
  it('4 is May', () => expect(getFullMonth('4')).toEqual('May'));
  it('5 is June', () => expect(getFullMonth('5')).toEqual('June'));
  it('6 is July', () => expect(getFullMonth('6')).toEqual('July'));
  it('7 is August', () => expect(getFullMonth('7')).toEqual('August'));
  it('8 is September', () => expect(getFullMonth('8')).toEqual('September'));
  it('9 is October', () => expect(getFullMonth('9')).toEqual('October'));
  it('10 is November', () => expect(getFullMonth('10')).toEqual('November'));
  it('11 is Describe', () => expect(getFullMonth('11')).toEqual('December'));
  it('something else is false', () => expect(getFullMonth('sdf')).toEqual(false));
});