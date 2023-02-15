import react, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks, fetchStatus } from "../actions";
import { Color, ColorName } from "../constants";
import useGetTaskWithStatus from "../hooks/useGetTaskWithStatus";
import { ITask } from "../interface";
import {
  Column,
  Container,
  Button,
  Row,
  Title,
  Category,
  List,
  Item,
  Circle,
  Name,
} from "../styles";

const Task = (): JSX.Element => {
  const dispatch = useDispatch();

  const tasks = useGetTaskWithStatus();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchStatus());
  }, []);

  const findCategories = useCallback((arr: ITask[], key: string) => {
    return arr.filter((value) => value.category === key);
  }, []);

  console.log(tasks);

  const getItem = (key: string): JSX.Element => {
    const category = findCategories(tasks, key);
    const color = (status: ColorName) => Color[status];
    return (
      <>
        {category.map((data) => (
          <Item key={data.id}>
            <Circle color={color(data.status)} />
            <Name>{data.name}</Name>
          </Item>
        ))}
      </>
    );
  };

  return (
    <Container>
      <Title>Categories and Tasks</Title>
      <Column>
        <Button>Override Statuses</Button>
        <Button>Override Statuses</Button>
      </Column>
      <Column>
        <Row>
          <Category>html</Category>
          <List>{getItem("html")}</List>
        </Row>
        <Row>
          <Category>css</Category>
          <List>{getItem("css")}</List>
        </Row>
        <Row>
          <Category>js</Category>
          <List>{getItem("js")}</List>
        </Row>
      </Column>
    </Container>
  );
};

export default Task;
