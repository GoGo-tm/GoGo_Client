import type { ButtonProps } from ".";

const VAC: ButtonProps = (props) => {
  return (
    <button
      onClick={props.event}
      className={`active:scale-[0.985] ${
        props.primary && "bg-primary text-white"
      } ${
        props.sub && "bg-white text-black"
      } border border-primary rounded-full px-2 py-2 w-full`}
    >
      {props.children}
    </button>
  );
};

export default VAC;
