// @flow
import {Component, define, prop, h} from 'skatejs';
import styles from './styles.css';
import {buttonClick} from './events.js';

export class MyContent extends Component {
  static get is(): string {
    return 'my-content';
  }

  static get props(): Object {
    return {
      buttonsArray: {
        initial: ['Page 1', 'Page 2', 'Page 3']
      },
      currentButton: prop.string()
    };
  }

  renderCallback()/* : h */ {
    return (
      <div>
        <style>{styles}</style>
        <strong>Select button:</strong>
        <div id="buttons">
          {this.buttonsArray.map((buttonName) => {
            return (
              <button onClick={buttonClick.bind(this)}>
                {buttonName}
              </button>
            );
          })}
        </div>
        {this.currentButton.length > 0 &&
        <p>
          You've selected "{this.currentButton}"!
        </p>
        }
      </div>
    );
  }
}

define(MyContent);
