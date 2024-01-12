import Button, { ButtonVariant } from "src/atoms/button/Button";
import MainCard from "src/atoms/components/mainCard/MainCard";
import Flex from "src/atoms/containers/flex/Flex";
import Icons from "src/atoms/icon/Icons";
import Navbar from "src/atoms/navbar/Navbar";
import SearchInput from "src/atoms/searchInput/SearchInput";
import colorSet from "src/styles/colorSet";
import Grid from "src/atoms/containers/grid/Grid";
import MainCardPic from "src/atoms/components/mainCard/MainCard";
const MainPage = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Flex
        wrap={"nowrap"}
        width={"300px"}
        alignItems={"center"}
        gap={"10px"}
        style={{
          border: `2px solid ${colorSet.secondaryText}`,
          padding: "0.1rem 1rem",
          borderRadius: "1rem",
          marginRight: "40px",
        }}
      >
        <Icons.Search size={30} color={colorSet.secondaryText} />
        <SearchInput />
      </Flex>
      <Grid
        gridTemplateColumns={"repeat(1, 1fr)"}
        gap={"10px"}
        justifyContent={"center"}
        placeItems={"stretch"}
        alignItems={"stretch"}
      >
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </Grid>
    </Flex>
  );
};

export default MainPage;
