import { DefaultButton } from "@/common/components/ui/Button"
import { flexCenter, resetButton } from "@/common/styles/mixins"
import { colors, transitions } from "@/common/styles/styleConstants"
import styled from "styled-components"

export const TabsWrapper = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
`

export const TabButton = styled(DefaultButton) <{ isActive: boolean }>`
    ${flexCenter};
    gap: 10px;
    box-sizing: border-box;
    color: ${props => props.isActive ? colors.blackTotal : colors.grayText};
    height: 50px;
    text-align: center;
    font-size: 18px;
    border-bottom: ${props => props.isActive ? `2px solid ${colors.blackTotal}` : `2px solid ${colors.grayText}`};
`

export const DescriptionBlock = styled('h2')`
    padding: 0px;
    margin: 0px 10px 15px;
    font-size: 20px;
    font-weight: 500;
`

export const PostContent = styled('div')`
    width: 100%;
`

export const PostMediaContent = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

export const LoaderWrapper = styled('button')`
    ${flexCenter}
    ${resetButton}
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: ${colors.grayBorder};
    transition: ${transitions.mediumTransition};

    &:hover{
        opacity: 0.7;
    }
`
