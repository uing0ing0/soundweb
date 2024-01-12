import axios from "axios";
import { useAtom } from "jotai";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import SearchInput from "src/atoms/searchInput/SearchInput";
import StylelessLink from "src/atoms/stylelessLink/StylelessLink";
import Text from "src/atoms/text/Text";

import {
  userEmailAtom,
  userNameAtom,
  userPasswordAtom,
} from "../../utils/Atom";
const Mypage = () => {
  const [userEmail, setUserEmail] = useAtom(userEmailAtom);
  const [userPassword, setUserPassword] = useAtom(userPasswordAtom);
  const [name, setUserName] = useAtom(userNameAtom);
  const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
  });
  const handleSignUp = async () => {
    console.log("log");
  };
  return (
    <div className="container">
      <Flex flexDirection="column" alignItems="center" gap="15px">
        <Button width={"270px"} variant={ButtonVariant.outlined}>
          <Text>dummy@gmail.com</Text>
        </Button>
        <Button variant={ButtonVariant.outlined} width={"270px"}>
          <SearchInput
            type="email"
            id="email"
            name="email"
            placeholder="닉네임"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </Button>
        <Button variant={ButtonVariant.outlined} width={"270px"}>
          <SearchInput
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </Button>
        <Button variant={ButtonVariant.outlined} width={"270px"}>
          <SearchInput
            type="password"
            id="password"
            name="password"
            placeholder="변경 비밀번호"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </Button>
        <Button
          width={"270px"}
          height={"40px"}
          variant={ButtonVariant.contained}
          type="button"
          onClick={() => {
            handleSignUp();
          }}
          className="form-container"
        >
          <Text>수정하기</Text>
        </Button>
        <Button>
          <Text>회원탈퇴</Text>
        </Button>
      </Flex>
    </div>
  );
};

export default Mypage;
