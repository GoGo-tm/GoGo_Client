import VAC from "./vac";
import type { FunctionComponent } from "react";

interface Props {}

export type CardProps = FunctionComponent<Props>;

const Card: CardProps = (props) => {
  return <VAC {...props} />;
};

export default Card;
