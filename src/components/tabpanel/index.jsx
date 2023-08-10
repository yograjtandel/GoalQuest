import { v4 as uuidv4 } from 'uuid';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Customtable from '../table';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { globalData } from '@/src/store/global/global.slice';
import { getInitialData } from '@/src/store/global/global.action';
import {  useSession } from 'next-auth/react';

const Customtab = () => {
  const dispatch = useDispatch();
  const { users, tags, stages, managers, roles } = useSelector(globalData);
  const [tabIndex, setTabIndex] = useState();
  const session = useSession();

  useEffect(() => {
    const getData = async () => {
      await dispatch(getInitialData(session));
    };
    if (session.data) {
      getData();
    }

    handleTabsChange(0);
  }, [session]);

  const tabs = [
    {
      title: 'Stage',
      index: 0,
      data: stages || [],
      heading: { title: 'Title', display_sequence: 'Sequence' },
    },
    {
      title: 'Tags',
      index: 1,
      data: tags || [],
      heading: { title: 'Title' },
    },
    {
      title: 'Roles',

      index: 2,
      data: roles || [],
      heading: { name: 'Name' },
    },
    {
      title: 'User',
      index: 3,
      data: [...users, ...managers],
      heading: { name: 'Name', email: 'Email', 'role.name': 'Role' },
    },
  ];

  const handleTabsChange = async (index) => {
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
        {tabs
          .sort((a, b) => a.index - b.index)
          .map((tasktitle) => (
            <Tab textAlign={'start'} key={uuidv4()}>
              {tasktitle.title}
            </Tab>
          ))}
      </TabList>
      <TabPanels w={'100%'}>
        {tabs
          .sort((a, b) => a.index - b.index)
          .map((tab) => {
            return (
              <TabPanel key={uuidv4()}>
                {<Customtable data={tab.data} heading={tab.heading} />}
              </TabPanel>
            );
          })}
      </TabPanels>
    </Tabs>
  );
};

export default Customtab;
