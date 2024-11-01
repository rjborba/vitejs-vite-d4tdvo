import { createStore } from '@stencil/store';

const { state, onChange } = createStore({ test: 0 });

export { onChange, state };
