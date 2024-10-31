import polaroid3 from '../../public/polaroid3.png'
import logoeach from '../../public/logoeach.png'

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6 ">
        <main className="text-5xl text-[#009eca] flex flex-col items-center text-center drop-shadow-lg md:text-6xl font-bold gap-4">
          
            <img src={logoeach} className="size-48"/>
            <h1>FabLeste</h1>
            <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Traga sua ideia à vida!
        </p>
          {/* </h1>{" "} */}
          
        </main>

        

      </div>

      {/* Hero cards sections */}
      <div className="z-10">
      {/* <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]"> */}
        
        <img
        src={polaroid3}
        className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]"
        />
        
        {/* <HeroCards /> */}
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
