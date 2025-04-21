import '../styles/globals.css';
import { inter, vt323, firaCode } from '../styles/fonts';

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${vt323.variable} ${firaCode.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
