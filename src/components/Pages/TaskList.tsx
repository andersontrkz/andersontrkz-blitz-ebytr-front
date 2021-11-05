import { Flex, Spinner } from '@chakra-ui/react';

import TaskCard from './TaskCard';

const tasks = [
  {
    title: 'obscure Latin words',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    status: 'Virginia',
    priority: 'randomised',
    tags: 'which, which',
    startDate: '10/10/2010',
    finalDate: '11/11/2010',
  },
  {
    title: 'There are many variations',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority',
    status: 'embarrassing',
    priority: 'necessary',
    tags: 'words, combined',
    startDate: '12/12/2010',
    finalDate: '09/09/2010',
  },
  {
    title: 'There are many variations',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority',
    status: 'embarrassing',
    priority: 'necessary',
    tags: 'words, combined',
    startDate: '12/12/2010',
    finalDate: '09/09/2010',
  },
  {
    title: 'There are many variations',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority',
    status: 'embarrassing',
    priority: 'necessary',
    tags: 'words, combined',
    startDate: '12/12/2010',
    finalDate: '09/09/2010',
  },
];

export default function CardList() {
  return (
    <Flex mt="4" wrap="wrap">
      {tasks.length ? (
        tasks.map((task: any, index: number) => {
          return <TaskCard key={index} data={task} index={index} />;
        })
      ) : (
        <Flex justify="center">
          <Spinner
            m="0 auto"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="var(--primary-color)"
            size="xl"
          />
        </Flex>
      )}
    </Flex>
  );
}
