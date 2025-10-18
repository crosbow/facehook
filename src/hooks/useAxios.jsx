import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import useAuth from "./useAuth";

const useAxios = () => {
  const {
    auth: { tokens },
    setAuth,
  } = useAuth();

  useEffect(() => {
    // Request interceptor here
    // console.log(tokens);

    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${tokens.accessToken}`;

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor here
    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          const refreshTokenResponse = await axios.post(
            import.meta.env.VITE_BASE_URL + "/auth/refresh-token",
            {
              refreshToken: tokens.refreshToken,
            }
          );

          const { token: accessToken, refreshToken } =
            refreshTokenResponse.data;

          setAuth((prev) => ({
            ...prev,
            tokens: {
              accessToken,
              refreshToken: refreshToken,
            },
          }));

          originalRequest.headers.authorization = `Bearer ${accessToken}`;

          return axios(originalRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [tokens]);

  return { api };
};
export default useAxios;
