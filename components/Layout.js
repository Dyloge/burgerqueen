import Navabar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navabar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
