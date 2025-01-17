export const metadata = {
  title: 'Creative',
  description: 'samples of creative projects',
}

import Image from 'next/image';
import React from 'react';

const TwoColumnLayout = () => {
	return (
	  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
		 {/* Left Column */}
		 <div className="space-y-4">
			<div>
			  <img 
				 src="/knitting-assets/partial-knit-all.png" 
				 alt="Partial knitting swatches" 
				 className="w-full rounded-lg"
			  />
			</div>
			<div>
			  <img 
				 src="/knitting-assets/sweater-no28-partial.png" 
				 alt="Partially knit sweater" 
				 className="w-full rounded-lg"
			  />
			</div>
			<div>
			  <img 
				 src="/knitting-assets/blocking-swatches.png" 
				 alt="Blocking swatches" 
				 className="w-full rounded-lg"
			  />
			</div>
		 </div>
 
		 {/* Right Column */}
		 <div className="space-y-4">
			<div>
			  <img 
				 src="/knitting-assets/swatch-on-machine.png" 
				 alt="Swatch on machine" 
				 className="w-full rounded-lg"
			  />
			</div>
			<div>
			  <img 
				 src="/knitting-assets/knitting-red-pants.png" 
				 alt="Hand knitting" 
				 className="w-full rounded-lg"
			  />
			</div>
		 </div>
	  </div>
	);
 };

// export default TwoColumnLayout;

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Creative</h1>
		<TwoColumnLayout/>

	 </section>
  )
}
