import MenuLinks from "../../navbar/MenuLinks";
import SocMediaLinks from "./SocMediaLinks";

const AllFooterLinks = () => {
  return (
    <div className="all-footer-links">
      <div className="sitemap">
        Sitemap:
        <MenuLinks />
      </div>
      <SocMediaLinks />
    </div>
  );
};

export default AllFooterLinks;
