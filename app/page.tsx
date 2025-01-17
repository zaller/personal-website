import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold">
      	Isabel Zaller
      </h1>
		<h2 className="mb-4 text-xl tracking-tighter">Software engineer + fiber artist based in NYC</h2>
		<img 
			src="/knitting-assets/partial-knit-all.png" 
			alt="Knit square in a wavy pattern" 
			className="w-full rounded-lg"
		/>
		<h2 className="mt-10 text-xl tracking-tighter">Thoughts, tutorials, etc.</h2>

		<div className="my-8">
      	<BlogPosts />
      </div>
    </section>
  )
}
