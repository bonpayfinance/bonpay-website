import '@/styles/globals.css';
import localFont from 'next/font/local';
import { Provider } from 'react-redux';

import store from '../redux/store';

const gilroy = localFont({
  src: [
    {
      path: '../fonts/Gilroy-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    { path: '../fonts/Gilroy-Bold.ttf', style: 'bold', weight: '700' },
    {
      path: '../fonts/Gilroy-SemiBold.ttf',
      style: 'semibold',
      weight: '600',
    },

    { path: '../fonts/Gilroy-Light.ttf', style: 'light', weight: '300' },
    {
      path: '../fonts/Gilroy-Medium.ttf',
      style: 'medium',
      weight: '500',
    },
  ],
  variable: '--gilroy',
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={`${gilroy.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default App;
