import styles from './postUser.module.css'

//const getData = async (userId) => {
//    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'});
 // 
 //   if (!res.ok) {
 //     throw new Error('Failed to fetch data');
 //   }
 // 
 //   return res.json();
 // };

const PostUser = async ({userId}) => {
    const user =await getUser(userId);

  return (
    <div className={styles.conatiner}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
    </div>
  )
}

export default PostUser