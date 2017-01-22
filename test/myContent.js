import {buttonClick} from './../www/elements/MyContent/events.js'

describe('Button', () => {
  it('click', () => {
    assert.isFunction(buttonClick);
  });
});
