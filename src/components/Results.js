import { usePosts } from "../PostContext"

function Results() {
     const { searchedPosts } = usePosts()
     return <p>🚀 {searchedPosts.length} atomic posts found</p>;
}

export default Results