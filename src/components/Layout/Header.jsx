import { Center, Flex, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      pl="0"
      pr="4px"
      h="20"
      alignItems="center"
      boxShadow="base"
      bg="var(--black-color)"
      color="var(--white-color)"
    >
      <Center w="100%" justifyContent="center">
        <Heading fontSize="24px">Ebytr | My Tasks</Heading>
      </Center>
    </Flex>
  );
};
