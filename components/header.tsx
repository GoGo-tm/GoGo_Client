import styled from "styled-components";
import theme from "~/constants/theme";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header>
      <Title>{title}</Title>
    </header>
  );
};

export default Header;

const Title = styled.h1`
  font-size: ${theme.fontSize.sb5};
  font-weight: 700;
  text-align: center;
  padding: 1rem 0;
  border-bottom: 0.3px solid #b7b7b7;
`;
