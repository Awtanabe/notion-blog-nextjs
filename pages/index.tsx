import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import PostList from '../components/PostList';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function PostListPage({posts}) {
  return (
    <>
      <PostList posts={posts}/>
    </>
    )
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
