import Post from '../../../components/Post';

export default function PostPage({page, blokcks}) {
 return(
  <>
    <Post page={page} blocks={blokcks}/>
  </>
 )
}


// TODO  getStaticPaths・getStaticPropsを記載
// getDatabase をcategory様に変更する