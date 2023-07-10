import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Customtable from '../table';

const customtab = () => {
    const tasktitle = [
        { title: 'State' },
        { title: 'Tags' },
        { title: 'Roles'},
        { title: 'User'},
      
      ];
      const tabledata = [
        { title: 'State' },
        { title: 'Tags' },
        { title: 'Roles'},
        { title: 'User'},
      
      ];
  return (
    <Tabs orientation="vertical" h={'100%'} w={'100%'}>
      <TabList>
      {tasktitle.map((tasktitle) => (
        <Tab textAlign={'start'}>{tasktitle.title}</Tab>
      
      ))}
      </TabList>
      <TabPanels w={'100%'}>
      {tabledata.map((tabledata) => (
        <TabPanel>
          <Customtable />
        </TabPanel>
      ))}
      
      </TabPanels>
    </Tabs>
  );
};

export default customtab;
