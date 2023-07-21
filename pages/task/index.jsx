import { v4 as uuidv4 } from 'uuid';
import { Box } from '@chakra-ui/react';
import action from '@/src/utility/action';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData } from '@/src/store/global/global.action';
import {
  SetFormMode,
  SetIntialTaskData,
  SetTasks,
  tasks,
} from '@/src/store/task/task.slice';
import Kanban from '@/src/components/kanban/Kanban';
import CardList from '@/src/components/task/CardList';

const Task = (props) => {
  const { task_group } = props.pageProps;
  const Tasks = useSelector(tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetTasks(task_group));
    const getData = async () => {
      await dispatch(getInitialData());
    };
    getData();
  }, []);

  const task_list = useMemo(() => {
    return Tasks.map((group) => (
      <Kanban group={group} key={uuidv4()}>
        <CardList group={group} />
      </Kanban>
    ));
  }, [Tasks]);

  return (
    <Box gap={4} overflowX={'auto'} display={'flex'} h={'calc(100vh - 70px)'}>
      {task_list}
    </Box>
  );
};
export default Task;

export const getServerSideProps = async () => {
  let task_group = [];
  try {
    const res = await action({
      method: 'get',
      url: '/v1/task?group=stage',
    });
    task_group = res.data;
  } catch (e) {
    console.log(e);
  }

  return { props: { task_group } };
};
