import axios, { AxiosResponse } from 'axios';
import Task from '../interfaces/Task';

type GetTasksResponse = {
  data: Task[];
};

export const getTasks = async (token: string) => {
  try {
    const { data, status } = await axios.get<GetTasksResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getTasks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
