import Head from "next/head";
import { getCategoiredPosts } from "../../lib/notion";
import PostList from '../../components/PostList';
export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
export default function PostListPage({posts}) {
  return (
    <>
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList posts={posts}/>
    </>
    )
}

export const getServerSideProps = async ({params,query}) => {
  const database = await getCategoiredPosts(databaseId, query.q);

  return {
    props: {
      posts: database,
    },
  };
};

