import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number ;
  }

  interface PostQuery {
    pageSize: number
  }

const usePostList = (query: PostQuery) => {

    return useInfiniteQuery<Post[], Error>({
        // it is like a request users/userId/posts
        queryKey: ['posts', query],
        queryFn: ({pageParam = 1}) => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _start: (pageParam - 1) * query.pageSize,
                _limit: query.pageSize
            }
        }).then(res => res.data),
        staleTime: 1 * 60 * 1000, // 1m
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }
    });
};

export default usePostList;