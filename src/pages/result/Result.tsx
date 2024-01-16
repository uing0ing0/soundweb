import { useNavigate } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import Image from "src/atoms/image/Image";
import SearchInput from "src/atoms/searchInput/SearchInput";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import styled, { CSSProperties } from "styled-components";
import Font from "src/styles/Font";

interface PanelProps {
  color?: CSSProperties["backgroundColor"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}
const BookCard = styled.div<PanelProps>`
  background-color: ${({ color }) => color};
  border-radius: 16px;
  padding: 16px;

  border: 3px solid #fff;
  box-shadow: ${({ color }) =>
    color
      ? "2px 4px 4px 0px rgba(0, 0, 0, 0.15)"
      : "2px 4px 8px 0px rgba(0, 0, 0, 0.1)"};
  color: white;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 20px;
  align-items: center;
  justify-content: center;
  padding: 25px;
  gap: 30px;
`;

const QuestionCard = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("Submit");
    navigate("/result2");
  };
  return (
    <>
      <Flex flexDirection="column" alignItems="center" gap="20px">
        <BookCard width={"300px"} height={"400px"}>
          <Text color={colorSet.text} size={"1.8rem"} font={Font.Bold}>
            <br />
            <br />
            결과 산출 중입니다
            <br />
            <br />
          </Text>

          <Image
            width={200}
            src={
              "https://static.wixstatic.com/media/4437ea_3509df33c40f401c9a7fd30e23801bdb~mv2.png/v1/fill/w_1159,h_586,al_c,q_90,enc_auto/4437ea_3509df33c40f401c9a7fd30e23801bdb~mv2.png"
            }
          />
        </BookCard>

        <Button
          onClick={handleSubmit}
          width="350px"
          height="50px"
          variant={ButtonVariant.contained}
        >
          <Text size={"1.2rem"}>확 인</Text>
        </Button>
      </Flex>
    </>
  );
};

export default QuestionCard;
