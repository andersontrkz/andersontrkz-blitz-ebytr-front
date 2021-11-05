import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getAllTasks } from '../../apis/tasks';

import TaskCard from './TaskCard';

export default function CardList() {
  const [tasks, seTasks] = useState([]);

  const loadTasks = async () => {
    const request = await getAllTasks();

    seTasks(request.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

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
