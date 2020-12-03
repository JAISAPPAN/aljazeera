import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import '../styles/globals.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps}></Component>
    </Provider>
  );
};

export default App;
