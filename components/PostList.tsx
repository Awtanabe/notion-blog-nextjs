import Head from "next/head";
import Link from "next/link";
import { Text } from "./Text";
import styles from "../pages/index.module.css";

export default function PostList({ posts }) {
  return (
    <div>
      <main className={styles.main_container}>
        <header className={styles.header}>
          <div className={styles.logos}>
            {/* ロゴ作成したらここに */}
          </div>
          <Link href="/">
            <h1>Aki エンジニア日記</h1>
          </Link>          
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
                      <Link href={`/post/${post.id}`}>
                        <Text text={post.properties.Name.title} />
                      </Link>
                    </h3>

                    <p className={styles.postDescription}>{date}</p>
                    <Link href={`post/${post.id}`}>Read post →</Link>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className={styles.sidebar}>
            <h3>Categories</h3>
            <ul className={styles.categoryList}>
              <li>
              <Link
                href={{
                  pathname: '/categoried_post',
                  query: { q: 'プログラミング' }
                }}
              >
                プログラミング
              </Link>
              </li>
              <li>
              <Link
                href={{
                  pathname: '/categoried_post',
                  query: { q: 'お金' }
                }}
              >
                お金
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
