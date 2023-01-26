import { COPYRIGHT } from "../lib/constants";

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} "{COPYRIGHT}".
  </div>
);

export { FooterCopyright };
