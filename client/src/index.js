import React from 'react';
import ReactDOM from 'react-dom';
import jss from 'jss';
import normalize from 'normalize-jss';
import jssGlobal from 'jss-global';
import Main from './layouts/main/Main';
import { createStore, applyMiddleware } from 'redux';
import craeteSagaMiddleware from 'redux-saga';
import store from './reducers';
import { Provider } from 'react-redux';
import rootSaga from './sagas';

const sagaMiddleware = craeteSagaMiddleware();
const appStore = createStore(
  store,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

jss.setup({plugins: [jssGlobal()]});
jss.createStyleSheet(normalize).attach();

const Index = () => {
  return (
    <Provider store={appStore}>
      <Main />
    </Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
