import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg p-12 ">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[200px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between items-center">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Conheça{" "}
                </span>
                o FabLab!
              </h2>
              <p className="text-xl text-muted-foreground mt-2 p-4">
                Os Fablabs são espaços de fabricação digital nos quais estudantes,
                educadores, empresas, profissionais, curiosos e especialistas podem
                adquirir conhecimento, trocar experiências e utilizar os equipamentos
                para tornar realidade seus projetos. <br/><b>Em breve, a comunidade eachiana
                terá seu próprio FabLab para atender aos seus interesses!</b>
                
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
