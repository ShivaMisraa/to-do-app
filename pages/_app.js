import '../styles/globals.css'
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { TodoProvider } from '../Context/Todocontext';

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </TodoProvider>
  );
}

export default MyApp;
