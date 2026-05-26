import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/fetchPosts";

// Custom hook for fetching posts using useQuery
export const usePosts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  return { data, isLoading };
};
