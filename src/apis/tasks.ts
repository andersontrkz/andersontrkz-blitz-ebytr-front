import axios from 'axios';

const URL = 'http://localhost:3006/tasks';

export const getAllTasks = async () => {
  const tasks = await axios.get(URL, {});
  console.log(tasks);
  return tasks;
};
