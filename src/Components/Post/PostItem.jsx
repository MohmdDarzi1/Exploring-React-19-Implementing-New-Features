import { use } from "react";

function PostItem() {
  async function fetchPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  }
 
  const posts = use(fetchPost());

  return (
    <div className="flex flex-col items-center my-4">
      {posts.map((item) => (
        <div key={item.id} className="bg-slate-800 p-4 my-6 w-1/2 rounded-lg">
          <h2 className="text-xl font-bold"> {item.title} </h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostItem;
