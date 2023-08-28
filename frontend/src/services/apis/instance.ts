import { useDefineApi } from "@/stores/useDefineApi";

// 此处 API 接口可以用中文写注释，后期再统一翻译成英语。

export interface MissionPassportResponse {
  addr: string;
  password: string;
}

// 请求建立终端 Socket 连接
export const setUpTerminalStreamChannel = useDefineApi<
  {
    params: {
      remote_uuid: string;
      uuid: string;
    };
  },
  MissionPassportResponse
>({
  url: "/api/protected_instance/stream_channel",
  method: "POST"
});