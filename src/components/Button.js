import { usePosts } from "../PostContext"

function Button() {
     const { setIsFakeDark, isFakeDark } = usePosts()
     return (
          <button
               onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
               className="btn-fake-dark-mode"
          >
               {isFakeDark ? "☀️" : "🌙"}
          </button>
     )
}

export default Button