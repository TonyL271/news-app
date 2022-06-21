
import Button from '@mui/material/Button';

const ArticleCardButton = ({content,sx}) => {
  return (
    <Button sx={{...{borderRadius:'0',width:'100%',backgroundColor:'#2A2A2A',color:'#E6F5FB'},...sx}}>{content}</Button>
  )
}

export default ArticleCardButton