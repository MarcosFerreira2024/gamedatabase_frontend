import Button from "../buttons/Button";

type GameInfoProps = {
  name: string;
  rating?: string;
  summary?: string;
};

function GameInfo({ name, rating, summary }: GameInfoProps) {
  return (
    <div className="flex flex-col gap-4 max-w-[350px] max-h-[540px] relative">
      <h1 className="text-3xl dark:text-stone-100 text-stone-950">{name}</h1>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img src="/icons/star.svg" alt="" />
          <p className="dark:text-stone-400">{rating ?? "0.0"}</p>
        </div>
        <p className="text-xs dark:text-stone-400 ">Avaliação da Crítica</p>
      </div>
      {summary && (
        <div className="max-h-[190px] dark:text-stone-400  overflow-y-auto ">
          {summary}
        </div>
      )}

      <div className="absolute bottom-0 w-full">
        <Button
          onClick={() => window.alert("Função em desenvolvimento")}
          icon="/icons/plus.svg"
          iconSize={24}
          order="iconFirst"
          size="xl"
        >
          Adicionar a Lista de Desejos
        </Button>
      </div>
    </div>
  );
}

export default GameInfo;
