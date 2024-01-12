import Flex from "src/atoms/containers/flex/Flex";
import Grid from "src/atoms/containers/grid/Grid";
import Icons from "src/atoms/icon/Icons";
import SearchInput from "src/atoms/searchInput/SearchInput";
import colorSet from "src/styles/colorSet";
import styled, { CSSProperties } from "styled-components";
import Text from "src/atoms/text/Text";
import Image from "src/atoms/image/Image";
import Button, { ButtonVariant } from "src/atoms/button/Button";

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
  return (
    <>
      <Flex flexDirection="column" alignItems="center" gap="20px">
        <BookCard width={"300px"} height={"400px"}>
          <Image src={"https://picsum.photos/200/350"} />
          <Text color={colorSet.secondaryText} size={"1.2rem"}>
            진실은 언제나 빛나고 있어
          </Text>
        </BookCard>
        <Flex
          wrap={"nowrap"}
          width={"320px"}
          height={"40px"}
          alignItems={"center"}
          style={{
            border: `2px solid ${colorSet.secondaryText}`,
            padding: "0.1rem 1rem",
            borderRadius: "1rem",
          }}
        >
          <SearchInput placeholder="당신의 질문은?" />
        </Flex>
        <Button width="350px" variant={ButtonVariant.contained}>
          <Text size={"0.9rem"}>질문하기</Text>
        </Button>
      </Flex>
    </>
  );
};

export default QuestionCard;
