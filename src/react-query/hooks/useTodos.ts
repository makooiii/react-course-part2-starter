import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../services/api-client";
import { CACHE_KEY_TODOS } from "../constants";

const apiClient = new APIClient<Todo>('/todos')

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () => axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos").then(res => res.data);

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll, // This function in apiclient become undefined. need to change it to function api = () =>{request}
    staleTime: 10 * 1000
  });
};

export default useTodos;
