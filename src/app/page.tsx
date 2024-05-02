import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Globe, GraduationCap, Percent, Phone, Plug, SatelliteDish, SearchCheck, Shield } from "lucide-react";
import Link from "next/link";


const perks = [

  {
    name: "Prompt sales",
    Icon: Phone, 
    description: "We offer prompt sales of airtime from all services providers (MTN, GLO, AIRTEL & 9MOBILE), where our customers can get their airtime just with a few punches on their phones."

  },

  {
    name: "High Discount Prices",
    Icon: Globe, 
    description: "Our users enjoy high discount prices on purchase of Internet data plans. All major service providers (MTN, GLO, AIRTEL & 9MOBILE) are available."

  },

  {
    name: "Uninterupted Services",
    Icon: SatelliteDish, 
    description: "Experience uninterrupted entertainment with our Cable TV subscriptions. From popular channels on DSTV, Showmax to budget-friendly options on GOTV and STARTIMES, we've got you covered. Enjoy the best shows and sports from the comfort of your home."

  },
  {
    name: "Empower Your Education",
    Icon: GraduationCap, 
    description: "Empower your educational journey with our swift and reliable exam pins service. Get instant access to WAEC, NECO, JAMB, and UTME pins. Take the next step towards success with us by your side."

  },
  {
    name: "Ease of payment",
    Icon: Plug, 
    description: "Say goodbye to long queues and late fees! Easily pay your electricity bills with us. We support major providers like IKEDC, EKEDC, IBEDC, BEDC, KAEDCO, AEDC, PHED, and more. Keep your lights on and never miss a beat."

  },
]

const features = [
  {
    name: "Instant Service Excellence",
    Icon: SearchCheck,
    description: "Experience seamless, lightning-speed delivery across all our services"
  },
  {
    name: "Fortress of Secure Transactions",
    Icon: Shield,
    description: "Your security is paramount. Our robust platform safeguards your information with the utmost care and cutting-edge technology."
  },
]





export default function Home () {
  return (
    <>    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-6xl">Enjoy Instant Delivery On <span className="text-red-600">Every Purchase.</span>
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">Experience lightning-fast, reliable internet services that seamlessly connect you to the digital world.
      </p>
      <p className="mt-4 text-lg max-w-prose text-muted-foreground">With over 5 years of proven expertise, we stand as your top choice for cutting-edge online connectivity solutions.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Link href='/sign-up' className={buttonVariants()}>Sign Up</Link>
      <Button variant='ghost'>Login &rarr;</Button>

    </div>
      </div>
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div key={perk.name}
            className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900">
                  {<perk.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>  

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
              </div>     
            </div>
          ))}

        </div>

      </MaxWidthWrapper>

    </section> 
    <section className="border-t border-gray-200 bg-white">
        <MaxWidthWrapper className="py-20">
        <div className="grid gap-y-12 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 lg:gap-x-8 lg:gap-y-0">
          
            <div 
            className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900">
                <Percent className="h-1/3 w-1/3" />
                </div>
              </div>  

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">Pricing</h3>
                <p className="mt-3 text-sm text-muted-foreground">Explore our affordable pricing options tailored to fit your needs. At IAB Concept, we believe in providing quality services without breaking the bank. Discover competitive rates for airtime, data bundles, cable TV subscriptions, and more. Get the best value for your money with us.</p>
              </div>     
            </div>
          

        </div>
        </MaxWidthWrapper>
    </section>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
          {features.map((feature) => (
            <div key={feature.name}
            className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-950 text-white">
                  {<feature.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>  

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{feature.description}</p>
              </div>     
            </div>
          ))}

        </div>

      </MaxWidthWrapper>

    </section>
    </>

  )
} 