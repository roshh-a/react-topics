import React, { useEffect } from "react";
import { PostDataProps } from "../Helpers/Model";
import { usePosts } from "../Hooks/usePosts";

export const Posts = () => {
  const { data, isLoading } = usePosts();
  //users.map((user: User) => user.name); .filter((id: number) => id == 1)
  return (
    <div dir="rtl">
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>
          {data.map((postData: PostDataProps) => (
            <p>{postData.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};
