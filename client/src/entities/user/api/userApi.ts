import { IUser } from "@/entities/user/model/types";
import { baseApi } from "@/shared";

export const userApi = {
  getById: (id: number): Promise<{ data: IUser }> =>
    baseApi.get(`/users/${id}`),
};
