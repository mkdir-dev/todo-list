import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { CircularProgress, Typography } from '@mui/material';

import { ShowNewsTickerContext } from 'contexts/ShowNewsTickerContext';

import { TickerBoxStyled } from 'ui/Ticker/Ticker';
import { useGetNews } from 'hooks/useGetNews';
import { errColor, loadColor, mainColor } from 'assets/styles/colors';

export const Ticker: React.FC = () => {
  const isShowNewsTicker = useContext(ShowNewsTickerContext);

  const { NewsData, isLoadingNews, isErrorNews } = useGetNews({
    isGetNews: isShowNewsTicker,
  });

  const stringNews = NewsData?.map((news) => news.title).join(' * * * ');

  if (isLoadingNews) {
    return (
      <Box sx={TickerBoxStyled}>
        <CircularProgress
          sx={{ display: 'block', margin: '0 auto', color: loadColor }}
        />
      </Box>
    );
  }
  if (isErrorNews) {
    return (
      <Box sx={TickerBoxStyled}>
        <Typography
          variant="subtitle1"
          sx={{ width: '100%', color: errColor, textAlign: 'center' }}
        >
          Failed to load data.
        </Typography>
      </Box>
    );
  }
  return (
    <>
      {stringNews && (
        <Box sx={TickerBoxStyled}>
          <Box
            sx={{
              animation: `text ${stringNews.length / 10}s infinite linear`,
              whiteSpace: 'nowrap',
            }}
          >
            <Typography variant="h3" sx={{ color: mainColor }}>
              {stringNews}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
