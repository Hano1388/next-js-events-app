import MainMenu from './MainMenu';

const Layout = ({ children }) => {
  return (
    <>
      <MainMenu />
      <main>{children}</main>
    </>
  );
};

export default Layout;
