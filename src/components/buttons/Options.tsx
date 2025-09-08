import React from "react";
import CopyButton from "./CopyButton";
import MoreInfoButton from "./MoreInfoButton";
import PlayButton from "./PlayButton";

function Options({
  toCopy,
  video,
  link,
  direction = "row",
}: {
  toCopy: string;
  video: string;
  link: string;
  direction: "row" | "column";
}) {
  return (
    <div className="flex gap-4" style={{ flexDirection: direction }}>
      <CopyButton toCopy={toCopy} />
      <MoreInfoButton to={link} />
      <PlayButton video={video} />
    </div>
  );
}

export default Options;
