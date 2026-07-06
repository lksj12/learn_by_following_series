type PageProps = {
    params: {
        id: string;
    };
};

type Post = {
    id: string;
    title: string;
    created: string;
    updated: string;
};

async function getPost(postId: string): Promise<Post> {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
        {next :{revalidate: 10}}
    );

    if(!res.ok) {
        throw new Error("failed to fetch data");
    }

    const data = await res.json();

    return data as Post;
}

const PostDetailPage = async ({params}: PageProps) => {
    const { id } = await params;
    const post = await getPost(id)
    return (
        <div>
            <h1 className="text-4xl font-bold">posts/{post.id}</h1>
            <div>
                <h3 className="text-xl">{post.title}</h3>
                <h3 className="text-xl">{post.created}</h3>
            </div>
        </div>
    )
}

export default PostDetailPage;