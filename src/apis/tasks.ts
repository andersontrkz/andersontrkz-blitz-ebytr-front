import axios from 'axios';

const URL = 'http://localhost:3006/tasks';

interface TaskCardData {
  title: string;
  description: string;
  status: string;
  priority: string;
  tags: string;
  startDate: string;
  finalDate: string;
}

export const getAllTasks = async () => {
  return await axios.get(URL, {});
};

export const createTask = async (data: TaskCardData) => {
  const task = await axios.post(URL, { ...data });
  return task;
};
