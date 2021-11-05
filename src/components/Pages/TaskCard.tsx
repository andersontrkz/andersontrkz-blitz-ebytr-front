import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Flex,
} from '@chakra-ui/react';

interface TaskCardData {
  id?: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  tags: string;
  startDate: string;
  finalDate: string;
}

interface TaskCardProps {
  data: TaskCardData;
  index: number;
}

function Card({ data, index }: TaskCardProps) {
  const generateCardColor = () => {
    if (index % 2 === 0) {
      return 'var(--dark-gray-color)';
    } else {
      return 'var(--primary-color)';
    }
  };

  const converToLocalDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <Center py={6} id={data.id}>
      <Flex
        border="1px"
        borderColor={generateCardColor()}
        direction="column"
        maxW={'400px'}
        maxH="lg"
        minH="lg"
        w={'full'}
        mx="4"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="dark-lg"
        rounded="md"
        p={6}
        overflow={'hidden'}
        justifyContent="space-between"
      >
        <Box>
          <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <Image
              src={
                'https://d57439wlqx3vo.cloudfront.net/iblock/03c/03c3f81942edbe28e073436c1e47b227/64c181f8554dc9a0e27e654be545e45d.png'
              }
              layout={'fill'}
            />
          </Box>
          <Stack>
            <Text
              color="var(--primary-color)"
              textTransform={'uppercase'}
              fontWeight="bold"
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {data.tags}
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {data.title}
            </Heading>
            <Stack mt={4}>
              <Flex spacing={0} fontSize={'sm'} justifyContent="space-between">
                <Flex>
                  <Text mr="2" fontWeight={600}>
                    Prioridade:
                  </Text>
                  <Text color={'gray.500'}>{data.priority}</Text>
                </Flex>
                <Flex>
                  <Text mr="2" fontWeight={600}>
                    Status:
                  </Text>
                  <Text color={'gray.500'}>{data.status}</Text>
                </Flex>
              </Flex>
            </Stack>
            <Text color={'gray.500'}>{data.description}</Text>
          </Stack>
        </Box>
        <Stack mt={4} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} alt={'Author'} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>João Carneiro</Text>
            <Text color={'gray.500'}>
              Início: {converToLocalDate(data.startDate)} - Prazo:{' '}
              {converToLocalDate(data.finalDate)}
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Center>
  );
}

export default Card;
