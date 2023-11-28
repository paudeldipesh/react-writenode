import { useEffect, useRef, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useTitle } from "../hooks/useTitle";
import { PostCard, SkeletonCard } from "../components";

export const HomePage = () => {
  useTitle("Home");
  const [posts, setPosts] = useState(new Array(2).fill(false));
  const [toggle, setToggle] = useState(false);
  const postRef = useRef(collection(db, "posts"));

  useEffect(() => {
    (async function getPosts() {
      const data = await getDocs(postRef.current);
      const result = data.docs.map((document) => ({
        ...document.data(),
        id: document.id,
      }));
      setPosts(result);
    })();
  }, [postRef, toggle]);

  return (
    <section>
      {posts.map((post, index) =>
        post ? (
          <PostCard
            key={post.id}
            post={post}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};
