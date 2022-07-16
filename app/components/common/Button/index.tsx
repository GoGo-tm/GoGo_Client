import type { FunctionComponent } from "react";
import VAC from "./vac";

interface Props {
  primary?: boolean;
  sub?: boolean;
  event: () => void;
}

export type ButtonProps = FunctionComponent<Props>;

const Button: ButtonProps = ({
  primary = true,
  sub = !primary,
  event,
  ...rest
}) => {
  const props = {
    primary: !sub,
    sub,
    event,
    children: rest.children,
  };

  return <VAC {...props} />;
};

export default Button;
