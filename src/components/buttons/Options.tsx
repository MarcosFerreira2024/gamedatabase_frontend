import CopyButton from "./CopyButton";
import MoreInfoButton from "./MoreInfoButton";
import PlayButton from "./PlayButton";

function Options({
  toCopy,
  video,
  link,
  direction = "row",
}: {
  toCopy?: string;
  video?: string;
  link?: string;
  direction: "row" | "column";
}) {
  return (
    <div className="flex gap-2" style={{ flexDirection: direction }}>
      {toCopy && <CopyButton toCopy={toCopy} />}
      {link && <MoreInfoButton to={link} />}
      {video && <PlayButton video={video} />}
    </div>
  );
}

export default Options;
