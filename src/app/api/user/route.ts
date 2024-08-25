"use server";
import apiInstacne from "../instance";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const nickname = searchParams.get("nickname");
  const res = await apiInstacne.get("/fconline/v1/id", {
    params: {
      nickname: nickname,
    },
  });
  const ouid = res.data;
  return Response.json(ouid);
};
