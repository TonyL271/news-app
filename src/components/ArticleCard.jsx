import Box from '@mui/material/Box';
import ArticleCardButton from './ArticleCardButton';
function App({ imgSrc, title, newsSource, desc,style}) {
  return (
    <Box className="article-card grid-item" sx={{...{  display:'flex' ,flexDirection:'column',fontFamily: '\'PT Sans\', sans-serif'}, ...style}}>
      <Box component="img" className='article-image' src={imgSrc} sx={{ borderRadius: '6px 6px 0 0', width: '100%' }}></Box>
      <Box className="details" sx={{backgroundColor:'#FCFEFE', px:'2rem'}}>
        <Box component="p" sx={{fontWeight:'bold',fontSize:'1rem',}} className="article-title">{title}</Box>
        <Box component="p" sx={{fontSize:'0.8rem'}} className="news-source">{'From: '+newsSource}</Box>
        <Box component="p" className="article-desc">{desc}</Box>
      </Box >
      <Box className="card-buttons" sx={{ width: '100%', display: 'flex' }}>
        <ArticleCardButton content="like" sx={{ borderRadius: '0 0 0 6px'}}></ArticleCardButton>
        <Box className="seperator" sx={{height:'100%',width:'5px', backgroundColor:'#E6F5FB'}}></Box>
        <ArticleCardButton content="Comment"></ArticleCardButton>
        <Box className="seperator" sx={{height:'100%',width:'5px', backgroundColor:'#E6F5FB'}}></Box>
        <ArticleCardButton content="Share" sx={{ borderRadius: '0 0 6px 0' }}></ArticleCardButton>
      </Box>
    </Box>
  );
}

export default App;
