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
    navigate("/q1");
  };
  return (
    <>
      <Flex flexDirection="column" alignItems="center" gap="20px">
        <BookCard width={"300px"} height={"400px"}>
          <Text color={colorSet.text} size={"2.0rem"} font={Font.Bold}>
            볼륨 크기
          </Text>
          <Text color={colorSet.secondaryText} size={"1.2rem"}>
            <br />
            핸드폰 소리 크기가 충분한지
            <br />
            확인해주세요.
            <br />
            <br />
          </Text>
          <Image
            src={
              "data:image/png;base64,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"
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
