import styled from "styled-components";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { clampText, inputHoverActive, square } from "@/common/styles/mixins";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";

const SearchForm = styled("form")`
  position: relative;
`;

const SearchIntInput = styled("input")`
  width: 100%;
  height: 40px;
  padding: 10px 73px 10px 25px;
  border: ${borders.borderGrayAccent};
  border-radius: ${borders.bigBorderRadius};
  color: ${colors.blackTotal};
  background-color: transparent;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}

  &::placeholder {
    color: ${colors.grayAccent};
  }

  &:focus {
    border-color: ${colors.blackTotal};
    background-color: ${colors.whiteBackground};
    outline: none;
  }

  ${inputHoverActive}

  @media ${device.tablet} {
    padding-inline: 15px 45px;
  }
`;

const SearchIcon = styled(SvgHelper)`
  position: absolute;
  top: 50%;
  right: 25px;
  z-index: 1;
  translate: 0 -50%;

  ${square(23)}
  color: ${colors.grayAccent};

  @media ${device.tablet} {
    ${square(20)}

    right: 15px;
  }
`;

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput = ({placeholder}: SearchInputProps) => {
  return (
    <SearchForm>
      <VisuallyHidden>
        <label htmlFor="search">Поиск</label>
      </VisuallyHidden>
      <SearchIntInput id="search" placeholder={!!placeholder ? `Поиск ${placeholder}` : "Поиск"} type="text" />
      <SearchIcon iconName="search" />
    </SearchForm>
  );
};
