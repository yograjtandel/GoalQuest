import { v4 as uuidv4 } from 'uuid';
import { Flex, Text, Tooltip } from '@chakra-ui/react';
import CustomCard from '@/src/components/card/index';
import { getManager, getProject, getStage } from '@/src/utility/helper';
import { useDispatch, useSelector } from 'react-redux';
import { globalData } from '@/src/store/global/global.slice';
// import { SetFormMode, SetIntialTaskData } from '@/src/store/task/task.slice';
import { BiStar, BiUser, BiCircle } from 'react-icons/bi';
import {
  SetFormMode,
  SetIntialProjectData,
} from '@/src/store/project/project.slice';
import NewProject from './NewProject';

export default function CardList(props) {
  const { managers, projects } = useSelector(globalData);
  const { group } = props;

  const dispatch = useDispatch();
  const cardClickHandler = (project) => {
    dispatch(
      SetIntialProjectData({
        data: project,
      })
    );
    dispatch(
      SetFormMode({
        project: 'edit',
      })
    );
  };

  const CardList = group.projects.map((project) => {
    if (projects.length === 0) {
      return;
    }
    const manager = getManager(managers, project.manager);

    return (
      <CustomCard
        title={'project'}
        onClickDispaly={<NewProject mode="edit" />}
        onClick={() => cardClickHandler(project)}
        key={uuidv4()}
      >
        <Text fontWeight={'400'}> {project.name}</Text>
      </CustomCard>
    );
  });

  return <>{CardList}</>;
}
