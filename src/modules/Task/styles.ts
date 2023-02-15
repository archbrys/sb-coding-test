import { css } from "@emotion/react";
import styled from "@emotion/styled";

const flexCenter = css`
  display: flex;
  flex: 1;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  ${flexCenter}
`

export const Button = styled.button`
  margin: 0 5px;
`


export const Column = styled.div`
  ${flexCenter}
  flex-direction: row;
  align-items: flex-start;
`

export const Row = styled.div`
  ${flexCenter}
  flex-direction: column;
`

export const Category = styled.h4`
  text-align: center;
`

export const List = styled.ul`
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px 5px;
  background: #efefef82;
  display: inline-flex;
  align-items: center;
`

export const Circle = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${props => props.color};
  margin-right: 3px;
`

export const Name = styled.span``