import { getAllPostIds, getPostData } from "../../../lib/post";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateStaticParams() {
    const paths = getAllPostIds();

    return paths.map((path) => ({
        id: path.params.id,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const postData = await getPostData(id);

    return {
        title: postData.title,
    };
}

export default async function Post({ params }: Props) {
    const { id } = await params;
    const postData = await getPostData(id);

    return (
        <article className = "max-w-xl px-[1rem] mt-12 mb-24 mx-auto">
            <h1 className="text-4xl font-bold">
                {postData.title}
            </h1>

            <div className="text-gray-500">
                {postData.date}
            </div>

            <div
                dangerouslySetInnerHTML={{
                    __html: postData.contentHtml,
                }}
            />
        </article>
    );
}