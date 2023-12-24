import PropTypes from "prop-types";
import clsx from "clsx";

export default function Button({ children, className }) {
  return (
    <button
      className={clsx(
        "rounded-full text-brand-seasalt py-4 px-[29px] font-black flex-shrink-0",
        className
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
