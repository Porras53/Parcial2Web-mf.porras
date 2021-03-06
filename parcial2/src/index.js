import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main';
import {IntlProvider} from 'react-intl';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import localeEsMessages from './locales/es.json';
import localeEnMessages from './locales/en.json';


const messages = {
  'en': localeEnMessages,
  'es': localeEsMessages
}

const language = navigator.language.split(/[-_]/)[0];


ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]} >
      <Main />
    </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
