import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6 ">
        <main className="text-5xl text-[#009eca] flex flex-col items-center text-center drop-shadow-lg md:text-6xl font-bold gap-4">
          
            <img src="../../public/logoeach.png" className="size-48"/>
            <h1>FabLab EACH</h1>
            <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Traga sua ideia à vida!
        </p>
          {/* </h1>{" "} */}
          
        </main>

        

      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
