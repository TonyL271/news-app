import React from 'react'
import { ArticleCard } from '.'
import Box from '@mui/material/Box';

const imgSrc = 'http://ipravda.sk/res/2020/05/26/thumbs/atom-clanokW.jpg'

const ArticleGrid = () => {
  return (
    <Box className='article-grid'>
      <ArticleCard
        width='33.33%'
        imgSrc={imgSrc}
        title="Why can't you trust atoms?"
        newsSource={'Fake News Broadcasting company'}
        desc="Because they make everything up. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      />
      <ArticleCard
        imgSrc={imgSrc}
        width='16.66%'
        title="Why can't you trust atoms?"
        newsSource={'Fake News Broadcasting company'}
        desc="Because they make everything up. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      />
    </Box>

  )
}

export default ArticleGrid