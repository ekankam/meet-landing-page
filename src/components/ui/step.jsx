import clsx from "clsx";
import PropTypes from "prop-types";

export default function Step({ label = "", className }) {
  return (
    <div className={clsx("flex flex-col items-center", className)}>
      <div className="w-[1px] h-[84px] bg-brand-cool-gray flex-shrink-0 opacity-25" />
      <div className="rounded-full w-14 h-14 flex-shrink-0 bg-brand-seasalt border border-brand-cool-gray/25 font-black text-brand-cool-gray flex items-center justify-center">
        {label}
      </div>
    </div>
  );
}

Step.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};
