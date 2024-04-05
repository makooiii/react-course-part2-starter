import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  const fetchTodos = () => axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos").then(res => res.data);

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll, // This function in apiclient become undefined. need to change it to function api = () =>{request}
    staleTime: 10 * 1000
  });
};

export default useTodos;
