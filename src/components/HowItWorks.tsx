import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Prototipe",
    description:
      "Tem uma ideia? Crie o protótipo dentro do FabLab com todo o suporte necessário.",
  },
  {
    icon: <MapIcon />,
    title: "Conecte",
    description:
    "Conheça outros estudantes e profissionais com interesses parecidos e desenvolvam juntos!",
  },
  {
    icon: <PlaneIcon />,
    title: "Aprenda",
    description:
      "Por meio de cursos, aprenda a utilizar maquinário, software e criar novas soluções.",
  },
  {
    icon: <GiftIcon />,
    title: "Utilize",
    description:
      "Use o maquinário, software e materiais para criar os resultados que deseja.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Como o {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          FabLab{" "}
        </span>
        pode me ajudar?
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
