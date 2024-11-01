import { type Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [sass()],
  tsconfig: './tsconfig.json',
  // globalStyle: 'src/global/helpers.scss',
  namespace: 'widgets',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      // customElementsExportBehavior: 'bundle',
      externalRuntime: false,
      // comment the following line to disable service workers in production
      // serviceWorker: null,
    },
  ],
  devServer: {
    port: 3333,
    reloadStrategy: 'hmr',
    openBrowser: false,
    root: '.',
  },
};
