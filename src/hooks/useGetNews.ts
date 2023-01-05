import { useQuery } from 'react-query';
import { API_URL, API_KEY } from 'utils/apiConstants';
import {
  GetNewsHook,
  GetNewsHookData,
  GetNewsDataResponse,
} from 'typings/hooks/useGetNews';

export const useGetNews = ({ isGetNews }: GetNewsHook): GetNewsHookData => {
  const { data, isLoading, isError } = useQuery(
    ['dataNews'],
    async () => {
      const res = await fetch(
        `${API_URL}/everything?domains=wsj.com&apiKey=${API_KEY}`,
        { method: 'GET' }
      );

      if (res.ok) {
        return await res.json();
      }

      throw new Error(`${res.status}. ${res.statusText}`);
    },
    {
      enabled: isGetNews,
      select: (res: GetNewsDataResponse) => res?.articles,
    }
  );

  return {
    NewsData: data,

    isLoadingNews: isLoading,
    isErrorNews: isError,
  };
};
