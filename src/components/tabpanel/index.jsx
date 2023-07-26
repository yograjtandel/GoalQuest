import { v4 as uuidv4 } from 'uuid';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Customtable from '../table';
import { GetStages } from '@/src/store/stage/stage.action';
import { useDispatch, useSelector } from 'react-redux';
import { Stages } from '@/src/store/stage/stage.slice';
import { useEffect, useState } from 'react';
import { GetTages } from '@/src/store/tag/tag.action';
import { Tags } from '@/src/store/tag/tag.slice';
import { Roles } from '@/src/store/role/role.slice';
import { GetRoles } from '@/src/store/role/role.action';

const customtab = () => {
  const dispatch = useDispatch();
  const StageData = useSelector(Stages);
  const TagData = useSelector(Tags);
  const RoleData = useSelector(Roles);
  const [tabIndex, setTabIndex] = useState();
  useEffect(() => {
    handleTabsChange(0);
  }, []);

  const tabs = [
    {
      title: 'Stage',
      getAction: GetStages,
      index: 0,
      data: StageData,
      heading: { title: 'Title', display_sequence: 'Sequence' },
    },
    {
      title: 'Tags',
      getAction: GetTages,
      index: 1,
      data: TagData,
      heading: { title: 'Title' },
    },
    {
      title: 'Roles',
      getAction: GetRoles,
      index: 2,
      data: RoleData,
      heading: { name: 'Name' },
    },
    {
      title: 'User',
      getAction: GetStages,
      index: 3,
      data: StageData,
      heading: { title: 'Title', display_sequence: 'Sequence' },
    },
  ];

  const handleTabsChange = async (index) => {
    await dispatch(tabs.find((tab) => tab.index === index).getAction());
    setTabIndex(index);
  };

  return (
    <Tabs
      orientation="vertical"
      h={'100%'}
      w={'100%'}
      value={tabIndex}
      onChange={handleTabsChange}
    >
      <TabList>
        {tabs.map((tasktitle) => (
          <Tab textAlign={'start'} key={uuidv4()}>
            {tasktitle.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels w={'100%'}>
        {tabs.map((tab) => (
          <TabPanel key={uuidv4()}>
            <Customtable data={tab.data} heading={tab.heading} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default customtab;
