// @flow
import {Component, define, h} from 'skatejs';
import {MyHeader} from '../MyHeader/MyHeader.js';
import {MyContent} from '../MyContent/MyContent.js';

export class AppMain extends Component {
  static get is(): string {
    return 'app-main';
  }

  renderCallback()/* : h */ {
    return (
      <main>
        <MyHeader text="Skate.js (JSX + Flow) Demo"/>
        <MyContent/>
      </main>
    );
  }
}

define(AppMain);
