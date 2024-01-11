import styled from "styled-components";

import colorSet from "../../styles/colorSet";
const SearchInput = styled.input<{
  isLightMode?: boolean;
}>`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;

  ::placeholder {
    background: transparent;
    color: ${({ isLightMode }) =>
      isLightMode
        ? colorSet.text
        : colorSet.secondaryText}; // Set the color you want for the placeholder text here.
  }
`;

export default SearchInput;
