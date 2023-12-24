import PropTypes from "prop-types";
import Header from "../header";

export default function Layout({ children }) {
  return (
    <div className="min-w-[375px] w-full max-w-screen-2xl mx-auto h-full">
      <Header />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
