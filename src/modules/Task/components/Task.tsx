import react, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootReducer } from "../../../store/interface";
import { fetchTasks, fetchStatus, overrideAllStatus } from "../actions";
import { Color, ColorName } from "../constants";
import { IStatus, ITask } from "../interface";
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
  const prevTask = useRef<IStatus[]>();
  const dispatch = useDispatch();
  const [taskWithStatus, setTaskWithStatus] = useState<ITask[]>([]);
  const { tasks, status } = useSelector((state: IRootReducer) => ({
    tasks: state.task.tasks,
    status: state.task.status,
  }));

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchStatus());
  }, []);

  useEffect(() => {
    if (JSON.stringify(status) !== JSON.stringify(prevTask.current)) {
      const tS = tasks.map((task) => {
        const _status = status.find((s) => s.taskId === task.id);
        return _status ? { ...task, status: _status.status } : task;
      });

      setTaskWithStatus(tS);
    }

    prevTask.current = status;
  }, [tasks, status]);

  const resetStatus = () => {
    dispatch(fetchStatus());
  };

  const findCategories = useCallback((arr: ITask[], key: string) => {
    return arr.filter((value) => value.category === key);
  }, []);

  const getItem = (key: string): JSX.Element => {
    const category = findCategories(taskWithStatus, key);
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

  const overrideStatus = () => {
    dispatch(overrideAllStatus(status));
  };

  return (
    <Container>
      <Title>Categories and Tasks</Title>
      <Column>
        <Button onClick={overrideStatus}>Override Statuses</Button>
        <Button onClick={resetStatus}>Reset Statuses</Button>
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
