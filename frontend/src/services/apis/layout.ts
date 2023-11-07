import { useDefineApi } from "@/stores/useDefineApi";

export const setLayoutConfig = useDefineApi<
  {
    data: string;
  },
  any
>({
  url: "/api/overview/layout",
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
});

export const getLayoutConfig = useDefineApi<any, string>({
  url: "/api/overview/layout",
  method: "GET"
});