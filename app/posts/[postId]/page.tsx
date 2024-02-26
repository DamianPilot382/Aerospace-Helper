import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostData, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import MyProfilePic from "@/app/components/MyProfilePic"
import Image from "next/image"

export const dynamic = 'force-static'

export function generateStaticParams(){
    const posts = getSortedPostData()
    
    return posts.map(post => {
        return {postId: post.id}
    });

}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if(!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostData()
    const { postId } = params

    if(!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const {title, date, contentHtml} = await getPostData(postId)
  
    const pubDate = getFormattedDate(date)

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">

            <h1 className="flex text-3xl mt-4 mb-0 justify-center">{title}</h1>

            <div className="flex justify-center items-center">

                <div className="mr-10">
                    <Image
                    className="border-2 border-black dark:border-slate-500
                    drop-shadow-sm shadow-black rounded-full mx-auto"
                    src="/images/profile-pic.png"
                    alt="Damian Ugalde"
                    width={100}
                    height={100}
                    priority={true}
                    />
                </div>
                <div className="items-center">
                    <p className="">{pubDate}</p>
                    <p className=" text-xl">By: <a>Damian Ugalde</a></p>
                </div>
            </div>

            
            
            <hr className="my-5"/>


            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}
