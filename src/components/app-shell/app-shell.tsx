import { Component, h } from '@stencil/core';
import { onChange, state } from '../../store';

@Component({
  tag: 'app-shell',
  styleUrl: './app-shell.scss',
  shadow: false,
})
export class AppSHell {
  componentWillLoad() {
    onChange('test', (newValue) => {
      // Here the state does reflect the new value.
      console.log('Store updated!!');
      console.log(newValue);
    });
  }

  render() {
    return (
      <div class="app-shell">
        Hello {state.test}
        <button
          onClick={() => {
            state.test = state.test + 1;
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
