export interface GetNewsDataArticlesResponse {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface GetNewsDataResponse {
  status: string;
  totalResults: number;
  articles: GetNewsDataArticlesResponse[];
}

export interface GetNewsHookData {
  NewsData: GetNewsDataArticlesResponse[] | undefined;

  isLoadingNews: boolean;
  isErrorNews: boolean;
}

export interface GetNewsHook {
  isGetNews: boolean;
}
