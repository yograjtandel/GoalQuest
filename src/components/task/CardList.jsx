import { Flex, Text, Tooltip } from '@chakra-ui/react';
import CustomCard from '@/src/components/card/index';
import { NewTask } from '@/src/components/task';
import { getManager, getProject, getStage } from '@/src/utility/helper';
import { useDispatch, useSelector } from 'react-redux';
import { globalData } from '@/src/store/global/global.slice';
import { SetFormMode, SetIntialTaskData } from '@/src/store/task/task.slice';
import { BiStar, BiUser, BiCircle } from 'react-icons/bi';

export default function CardList(props) {
  const { managers, projects } = useSelector(globalData);
  const { group } = props;

  const dispatch = useDispatch();
  const cardClickHandler = (task) => {
    dispatch(
      SetIntialTaskData({
        data: task,
      })
    );
    dispatch(
      SetFormMode({
        task: 'edit',
      })
    );
  };

  const drag = (e) => {
    e.dataTransfer.setData('task_id', e.target.id);
  };

  const CardList = group.tasks.map((task) => {
    if (projects.length === 0) {
      return;
    }
    const project = getProject(projects, task.project_id);
    const manager = getManager(managers, project.manager);

    return (
      <CustomCard
        draggable={true}
        onDragStart={(e) => drag(e)}
        title={'task'}
        onClickDispaly={<NewTask />}
        onClick={() => cardClickHandler(task)}
        key={task.id}
        id={task._id}
      >
        <Text fontWeight={'400'}> {task.title}</Text>
        <Text fontWeight={'400'} fontSize={'14px'} color={'gray.500'}>
          {project.name}
        </Text>

        <Flex mt={2} justifyContent={'space-between'}>
          <BiStar />
          <Flex>
            <Tooltip
              bg={'white'}
              color={'black'}
              label={manager.name}
              aria-label="A tooltip"
            >
              <Text me={2}>
                <BiUser />
              </Text>
            </Tooltip>
            <BiCircle />
          </Flex>
        </Flex>
      </CustomCard>
    );
  });

  return <>{CardList}</>;
}
