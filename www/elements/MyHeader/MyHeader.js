// @flow
import {Component, define, h} from 'skatejs';
import styles from './styles.css';

export class MyHeader extends Component {
  static get is(): string {
    return 'my-header';
  }

  static get props(): Object {
    return {
      text: {attribute: true}
    };
  }

  renderCallback()/* : h */ {
    return (
      <header>
        <style>{styles}</style>
        <h1>{this.text}</h1>
      </header>
    );
  }
}

define(MyHeader);

