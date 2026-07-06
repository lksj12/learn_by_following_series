import type { Metadata } from "next";
import { getSortedPostsData } from "../lib/post";
import Link from "next/link";
import Image from "next/image"

export const metadata: Metadata = {
    title: "My Blog",
    description: "Welcome to my blog!",
};
            
export default function Home() {
    const allPostsData = getSortedPostsData();
    return (
        <>
            <section className="text-[3rem] font-bold max-w-[100%] text-center px-[1rem] mt-8 mb-8 mx-auto"
            >
                <Image
                    src="/profile.png"
                    alt="Profile image"
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                />
                [Your Name]
            </section>
            <div className="max-w-xl px-[1rem] mt-12 mb-24 mx-auto">
                <section className="text-[1.2rem] leading-[1.5]">
                    <p>[Introduce Yourself]</p>
                    <br/>
                    <p>
                        (This is a sample website)
                    </p>
                    <br/>
                </section>
                <section className="pt-px text-[1.2rem] leading-[1.5]">
                    <h2 className="my-4 text-[1.5rem] leading-[1.4] font-bold">Blog</h2>
                    <ul className="m-0 list-none p-0">
                        {allPostsData.map(({id, date, title}) => 
                        <li className="mb-5" key = {id}>
                            <Link
                                className="text-blue-500 hover:underline"
                                href={`/posts/${id}`}>{title}</Link>
                            <br/>
                            <small className="text-gray-500">{date}</small>
                        </li>
                        )}
                    </ul>
                </section>
            </div>
        </>
    );
}