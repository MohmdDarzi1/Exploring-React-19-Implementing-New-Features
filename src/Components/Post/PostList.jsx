
import { Suspense } from "react"
import PostItem from "./PostItem"

function PostList() {
return (
     <Suspense fallback={
        <h2 className="text-2xl text-center font-bold mt-2">loading....</h2>
     }>
        <PostItem/>
     </Suspense>
)
}

export default PostList