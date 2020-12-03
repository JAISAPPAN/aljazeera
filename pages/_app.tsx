
import { AppProps } from "next/app";
import '../styles/globals.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    
      <Component {...pageProps}></Component>
    
  );
};

export default App;
