import { Suspense } from 'react';
import styles from './singlePost.module.css';
import Image from "next/image";

//const getData = async (slug) => {
//  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//
//  if (!res.ok) {
//   throw new Error('Failed to fetch data');
// }
//
//  return res.json();
//};


const SinglePostPage = async ({ params }) => {

  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img &&
      <div className={styles.imgContianer}>
        <Image
          src="/asset2.jpg"
          alt=''
          width={450}
          height={700}
          className={styles.img} />
      </div>}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src='/asset2.jpg'
            alt=''
            width={50}
            height={50} />
          {/*{post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>)}*/}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Dinath Nethmin</span>
          </div>
          <div className={styles.content}>{post.desc}
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage