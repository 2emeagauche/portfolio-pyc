import { Suspense, lazy } from 'react';
import SuspenseFallback from './components/SuspenseFallback';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Accueil from './pages/Accueil'

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Accueil = lazy(() => import('./pages/Accueil'));

function App() {
  return (
    // <SuspenseFallback />
    <Suspense fallback={<SuspenseFallback />}>
    <>
      <Header />
      <Accueil />
      <Footer />
    </>
    </Suspense>
  )
}

export default App;
