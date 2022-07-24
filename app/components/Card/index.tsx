import type { FunctionComponent } from "react";
import { Link } from "@remix-run/react";

interface Props {}

export type CardProps = FunctionComponent<Props>;

const Card: CardProps = () => {
  return (
    <div>
      <Link to={"/asd"}>
        <img src="" alt="" />
        <div>
          <p>hi</p>
          <p></p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
