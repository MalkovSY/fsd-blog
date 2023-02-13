import { classNames } from './classNames';

describe('classNames tests', () => {
  it('with first arg return this string', () => {
    const classString = classNames('firstClass');

    expect(classString).toBe('firstClass');
  });

  it('with additional prop return joined string', () => {
    const classString = classNames('firstClass', {}, ['secondClass']);

    expect(classString).toBe('firstClass secondClass');
  });

  it('with mods prop return joined string with mod keys', () => {
    const classString = classNames('firstClass', { hovered: true, secondary: true }, ['secondClass']);

    expect(classString).toBe('firstClass secondClass hovered secondary');
  });

  it('if mod item falsy - not pushed into joined string', () => {
    const classString = classNames('firstClass', { hovered: true, secondary: false }, ['secondClass']);

    expect(classString).toBe('firstClass secondClass hovered');
  });

  it('if mod item undefined - not pushed into joined string', () => {
    const classString = classNames('firstClass', { hovered: undefined, secondary: false }, ['secondClass']);

    expect(classString).toBe('firstClass secondClass');
  });
});
