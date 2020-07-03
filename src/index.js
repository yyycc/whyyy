import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import configStore from './common/configStore';
import routeConfig from './common/routeConfig';
import Root from './Root';

const store = configStore();

function renderApp(app) {
  render(
    <AppContainer>
      {app}
    </AppContainer>,
    document.getElementById('root')
  );
}

console.log('url:' + process.env.BASE_URI);
renderApp(<Root store={store} routeConfig={routeConfig} />);

// Hot Module Replacement API
/* istanbul ignore if  */
if (module.hot) {
  // 热部署
  module.hot.accept('./common/routeConfig', () => {
    const nextRouteConfig = require('./common/routeConfig').default; // eslint-disable-line
    renderApp(<Root store={store} routeConfig={nextRouteConfig} />);
  });
  module.hot.accept('./Root', () => {
    const nextRoot = require('./Root').default; // eslint-disable-line
    renderApp(<Root store={store} routeConfig={routeConfig} />);
  });
}
