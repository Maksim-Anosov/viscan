import { IPost } from "@/entities/post/model/types";
import { baseApi } from "@/shared";

export const postApi = {
  getAll: (): Promise<{ data: IPost[] }> => baseApi.get("/posts"),
  getById: (id: number): Promise<{ data: IPost }> =>
    baseApi.get(`/posts/${id}`),
};
