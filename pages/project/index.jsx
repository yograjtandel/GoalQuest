import { v4 as uuidv4 } from 'uuid';
import { Box } from '@chakra-ui/react';
import action from '@/src/utility/action';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData } from '@/src/store/global/global.action';
import { useEffect, useMemo } from 'react';
import { SetProjects, projects } from '@/src/store/project/project.slice';
import Kanban from '@/src/components/kanban/Kanban';
import CardList from '@/src/components/project/CardList';

const Project = (props) => {
  const { projects_grops } = props.pageProps;
  const Projects = useSelector(projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetProjects(projects_grops));
    const getData = async () => {
      await dispatch(getInitialData());
    };
    getData();
  }, []);

  const task_list = useMemo(() => {
    return Projects.map((group) => {
      return (
        <Kanban group={group} key={uuidv4()}>
          <CardList group={group} />
        </Kanban>
      );
    });
  }, [Projects]);

  return (
    <Box gap={4} overflowX={'auto'} display={'flex'} h={'calc(100vh - 70px)'}>
      {task_list}
    </Box>
  );
};

export default Project;

export const getServerSideProps = async () => {
  let projects_grops = [];
  try {
    const res = await action({
      method: 'get',
      url: '/v1/project?group=stage',
    });
    projects_grops = res.data;
  } catch (e) {
    console.log(e);
  }

  return { props: { projects_grops } };
};
