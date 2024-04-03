import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number ;
  }

const usePostList = (userId: number | undefined) => {

    return useQuery<Post[], Error>({
        // it is like a request users/userId/posts
        queryKey: userId ? ["users", userId, "posts"] : ['posts'],
        queryFn: () => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
            params: {
                userId
            }
        }).then(res => res.data)
    });
};

export default usePostList;