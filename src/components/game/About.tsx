import { motion } from "framer-motion";

type AboutProps = {
  data: {
    title: string;
    values: string[];
  }[];
};

function About({ data }: AboutProps) {
  const aboutMock = [
    {
      title: "Desenvolvedores",
      values: ["Insomniac Games"],
    },
    {
      title: "Publicador(a)",
      values: ["Sony Interactive Entertainment"],
    },
    {
      title: "Gêneros",
      values: ["RPG", "Aventura", "Hack and Slash"],
    },
    {
      title: "Modos",
      values: ["Singleplayer", "Multiplayer"],
    },
    {
      title: "Temas",
      values: ["Ação", "Stealth", "Drama", "Mundo-Aberto"],
    },
    {
      title: "Série",
      values: ["Marvel's Spider-Man"],
    },
    {
      title: "Franquia",
      values: ["Spider-Man Marvel"],
    },
    {
      title: "Motor Gráfico",
      values: ["Insomniac Engine v.4.0"],
    },
    {
      title: "Plataformas",
      values: ["PC (Microsoft Windows)", "PlayStation 4", "Xbox One"],
    },
  ];
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      layout
      className="border-1 dark:border-stone-900   max-w-[1440px] mx-auto rounded-xl"
    >
      <div className="grid grid-cols-5 border-b-1 dark:border-stone-900 w-full">
        {aboutMock.slice(0, 5).map((item) => (
          <div className="flex gap-2 flex-col w-full p-4 h-full    ">
            <h1 className="dark:text-stone-100 text-stone-950">{item.title}</h1>
            <div className="flex flex-col gap-2 dark:text-stone-400 text-xs max-w-[150px] max-h-[120px] h-[120px] overflow-y-auto">
              {item.values.map((value, index) => (
                <p key={index}>{value}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5  dark:border-stone-900 w-full">
        {aboutMock.slice(5, -1).map((item) => (
          <div className="flex gap-2 flex-col w-full p-4 h-full    ">
            <h1 className="dark:text-stone-100 text-stone-950">{item.title}</h1>
            <div className="flex flex-col gap-2 dark:text-stone-400 text-xs max-w-[150px] max-h-[120px] h-[120px] overflow-y-auto">
              {item.values.map((value, index) => (
                <p key={index}>{value}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default About;
