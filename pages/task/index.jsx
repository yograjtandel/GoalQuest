import { v4 as uuidv4 } from 'uuid';
import { Box, Text } from '@chakra-ui/react';
import action from '@/src/utility/action';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData } from '@/src/store/global/global.action';
import { SetTasks, tasks } from '@/src/store/task/task.slice';
import Kanban from '@/src/components/kanban/Kanban';
import CardList from '@/src/components/task/CardList';
import { GetTasks, UpdateTaskStage } from '@/src/store/task/task.action';
import { globalData } from '@/src/store/global/global.slice';
import { useSession } from 'next-auth/react';
import { authenticate } from '@/src/utility/helper';

const Task = (props) => {
  const { task_group } = props.pageProps;
  const Tasks = useSelector(tasks);
  const { stages } = useSelector(globalData);
  const dispatch = useDispatch();
  const session = useSession();

  useEffect(() => {
    dispatch(SetTasks(task_group));
    const getData = async () => {
      await dispatch(getInitialData(session));
    };
    getData();
  }, []);

  const drop = async (e) => {
    let id = e.dataTransfer.getData('task_id');
    let stage_id = e.currentTarget.id;
    await dispatch(
      UpdateTaskStage({
        stage_id,
        id,
      })
    );
    await dispatch(GetTasks(session));
  };

  const task_list = useMemo(() => {
    return Tasks.map((group) => (
      <Kanban group={group} name={group._id} onDrop={drop} key={uuidv4()}>
        <CardList group={group} />
      </Kanban>
    ));
  }, [Tasks]);

  return (
    <Box
      gap={4}
      overflowX={'hidden'}
      display={'flex'}
      minH={'calc(100vh - 70px)'}
      maxH={'calc(100vh - 70px)'}
      h="100%"
    >
      {task_list}
    </Box>
  );
};
export default Task;

export const getServerSideProps = async (context) => {
  let task_group = [];
  const session = await getSession(context);
  authenticate(session);
  try {
    const res = await action({
      method: 'get',
      url: `/v1/task?group=stage&&company=${session.company}`,
    });
    task_group = res.data;
  } catch (e) {
    console.log(e);
  }

  return { props: { task_group } };
};
