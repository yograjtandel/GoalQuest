import {
  Box,
  Container,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Link,
  Text,
} from '@chakra-ui/react';
import Logo from '@/public/assets/images/logo.png';
const footer = () => {
  return (
    <Box bg={'gray.200'}>
      <Container maxWidth={'container.xl'} py={16}>
        <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
          <Box w={'25%'}>
            <Box display={'flex'}>
              <Image src={Logo.src} w={'40px'} />
              <Heading>oalQuest</Heading>
            </Box>
            <Text fontSize={'12px'}>Streamline, Collaborate, Succeed</Text>
          </Box>
          <Box w={'25%'} display={'flex'} flexDirection={'column'}>
            <Heading size="md" mb={4}>
              Links
            </Heading>
            <List spacing={3}>
              <ListItem>About Us</ListItem>
              <ListItem>Team</ListItem>
              <ListItem>Signin</ListItem>
              <ListItem>Signup</ListItem>
          
            </List>
          </Box>
          <Box w={'25%'}>
            <Heading size="md" mb={4}>Contact</Heading>
            <List spacing={3}>
              <ListItem><Text >Email:</Text><Link href='mailto:"info@goalquest.in"' isExternal>info@goalquest.in</Link></ListItem>
              <ListItem><Text >Contact:</Text><Link href='tel:"6353009881"' isExternal>6353009881</Link>, <Link href='tel:"9773278523"' isExternal>9773278523</Link><br/> ,<Link href='tel:"9664816818"' isExternal>9664816818</Link></ListItem>
              
            </List>
          </Box>
          <Box w={'25%'}>
            <Heading size="md" mb={4}>Legal</Heading>
            <List spacing={3}>
              <ListItem>Terms and Condition</ListItem>
              <ListItem>Legal</ListItem>
              <ListItem>Quidem, ipsam</ListItem>
            
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default footer;
