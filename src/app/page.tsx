import MaxWidthWrapper from "@/components/MaxWidthWrapper";




export default function Home () {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-6xl">Enjoy Instant Delivery On <span className="text-red-600">Every Purchase.</span>
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">Experience lightning-fast, reliable internet services that seamlessly connect you to the digital world.
      </p>
      <p className="mt-5 text-lg max-w-prose text-muted-foreground">With over 5 years of proven expertise, we stand as your top choice for cutting-edge online connectivity solutions.
    </p>
      </div>
    </MaxWidthWrapper>
  )
} 