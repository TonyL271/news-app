import React from 'react'
import { ArticleCard } from '.'
import Box from '@mui/material/Box';
import Masonry from 'react-masonry-css'

const imgSrc = 'http://ipravda.sk/res/2020/05/26/thumbs/atom-clanokW.jpg'
const title = "Why can't you trust atoms?"
const newsSource = 'Fake News Broadcasting company'
const desc = "Because they make everything up. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
const imgWidths = [80,60,40,50];


const ArticleGrid = () => {

  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {imgWidths.map((imgWidth, idx) => (<ArticleCard key={idx} imgWidth={imgWidth + '%'} imgSrc={imgSrc} title={title} newsSource={newsSource} desc={desc} />))}
    </Masonry>
  )
}

export default ArticleGrid