import Link from "next/link"
import CreatePost from "./CreatePost";

type Post = {
    id: string;
    title: string;
    created: string;
    updated: string;
};

type PostItemProps = {
    post: Post;
};

async function getPost(): Promise<Post[]> {
    const res = await fetch("http://127.0.0.1:8090/api/collections/posts/records",
        {cache: "no-store"}
    );
    const data = await res.json();

    return data?.items as Post[];
}

const PostsPage = async() => {
    const posts = await getPost();
    
    return (
        <div>
            <h1 className="text-4xl font-bold">Posts</h1>
            {posts?.map((post)=>{
                return <PostItem key={post.id} post={post}/>
            })}
            <CreatePost />
        </div>
    )
};

export default PostsPage;

const PostItem = ({ post }: PostItemProps) => {
    const { id, title, created } = post || {};
    return (
        <Link href={`/posts/${id}`}>
            <div>
                <h3 className="text-xl">{title}</h3>
                <p>{created}</p>
            </div>
        </Link>
    )
}