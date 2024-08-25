"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { nickname: string } }) => {
  const [ouid, setOuid] = useState<string>("");
  const uidQuery = useQuery({
    queryKey: [params],
    queryFn: () =>
      axios.get("/api/user", {
        params: {
          nickname: decodeURI(params.nickname),
        },
      }),
    staleTime: Infinity,
  });
  useEffect(() => {
    if (uidQuery.isSuccess) {
      setOuid(uidQuery.data.data.ouid);
    }
  }, [uidQuery]);

  return <div>{ouid}</div>;
};

export default Page;
