import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import { useTogoContext } from "./contex";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const { getAccessToken } = useTogoContext();
  const refresh = useRefreshToken();
  useEffect(() => {
    const requestIntercept=axiosPrivate.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${getAccessToken()}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
        response => response,
        async (error) => {
            const prevRequest = error?.config;
            if (error?.response?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true;
                const newAccessToken = await refresh();
                console.log("new access private",newAccessToken);
                prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosPrivate(prevRequest);
            }
            return Promise.reject(error);
        }
    );
    
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [getAccessToken,refresh]);
};

export default useAxiosPrivate;
