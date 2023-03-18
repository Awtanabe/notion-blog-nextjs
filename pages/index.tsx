import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id]";
import styles from "./index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main_container}>
        <header className={styles.header}>
          <div className={styles.logos}>
            {/* ロゴ作成したらここに */}
          </div>
          <h1>Aki エンジニア日記</h1>
          <p>
            営業から、プログラミングスクールを経て、事業会社2社を2年半間経験後、フリーランスとして1年経験
            現在は、ベンチャー企業でPMと開発をやっています。
            言語は、React Next Ruby多いと思います
          </p>
        </header>
        <div className={styles.main_section}>
          <div className={styles.content}>
            <h2 className={styles.heading}>All Posts</h2>
            <ol className={styles.posts}>
              {posts.map((post) => {
                const date = new Date(post.last_edited_time).toLocaleString(
                  "en-US",
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                );
                return (
                  <li key={post.id} className={styles.post}>
                    <h3 className={styles.postTitle}>
                      <Link href={`/${post.id}`}>
                        <Text text={post.properties.Name.title} />
                      </Link>
                    </h3>

                    <p className={styles.postDescription}>{date}</p>
                    <Link href={`/${post.id}`}>Read post →</Link>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className={styles.sidebar}>
            <h3>Categories</h3>
            <ul className={styles.categoryList}>
              <li>
                <Link href="/category1">Category 1</Link>
              </li>
              <li>
                <Link href="/category2">Category 2</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
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
