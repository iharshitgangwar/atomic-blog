import { createContext, useContext, useEffect, useState } from "react";
import createRandomPost from "./utils/methods";
const PostContext = createContext()
function PostContextFn({ children }) {
     const [posts, setPosts] = useState(() =>
          Array.from({ length: 10 }, () => createRandomPost())
     );
     const [searchQuery, setSearchQuery] = useState("");
     const [isFakeDark, setIsFakeDark] = useState(false);
     // Derived state. These are the posts that will actually be displayed
     const searchedPosts =
          searchQuery.length > 0
               ? posts.filter((post) =>
                    `${post.title} ${post.body}`
                         .toLowerCase()
                         .includes(searchQuery.toLowerCase())
               )
               : posts;

     function handleAddPost(post) {
          setPosts((posts) => [post, ...posts]);
     }

     function handleClearPosts() {
          setPosts([]);
     }

     // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
     useEffect(
          function () {
               document.documentElement.classList.toggle("fake-dark-mode");
          },
          [isFakeDark]
     );
     return (
          <PostContext.Provider value={{
               onClearPosts: handleClearPosts,
               onAddPost: handleAddPost,
               setSearchQuery,
               searchQuery,
               posts,
               setIsFakeDark,
               searchedPosts,
               isFakeDark
          }}>
               {children}
          </PostContext.Provider>
     )
}
const usePosts = () => {
     const context = useContext(PostContext);
     if (context === undefined) throw new Error('Post Context is used Outside of context Provider')
     return context
}
export { PostContextFn, usePosts }
