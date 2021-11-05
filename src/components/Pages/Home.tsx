import { Layout } from '../Layout';
import { CreateTask } from '../Modals/Tasks/CreateTask';

import TaskList from './TaskList';

export const Home = () => {
  return (
    <Layout>
      <CreateTask />
      <TaskList />
    </Layout>
  );
};
