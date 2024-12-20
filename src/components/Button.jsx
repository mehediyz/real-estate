import clsx from "clsx";

const Button = ({ icon, children, href, onClick, classnames, variant }) => {
  const Inner = () => (
    <>
      <span className="flex items-center px-4 rounded-2xl">
        <span className="semibold">{children}</span>
        {icon && (
          <img src={icon} alt="btn" className="size-3 ml-2 object-contain" />
        )}
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      className={clsx(
        "p-2 rounded-full border border-grey-3 hover:border-accent-1 transition-all duration-200",
        classnames,
        variant == "accent" &&
          "bg-accent-1 text-white border-none hover:bg-accent-2"
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "p-2 rounded-full border border-grey-3 hover:border-accent-1 transition-all duration-200",
        classnames,
        variant == "accent" &&
          "bg-accent-1 text-white border-none hover:bg-accent-2"
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
