import Main from "./Main";
import Sidebar from "./Sidebar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Sidebar>
      <Main>{children}</Main>
    </Sidebar>
  );
};

export default Layout;
