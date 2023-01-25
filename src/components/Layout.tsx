import Meta from "./Meta";
import { TemplateFooter } from "./TemplateFooter";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <TemplateFooter />
    </>
  );
};

export default Layout;
