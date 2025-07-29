import React from "react";
import { Stack } from "@mui/material";
import { data } from "../Constant/data";

const Story = () => {
  return (
    <Stack className="StoryCard">
      <h2
        style={{
          padding: 0,
          margin: 0
        }}
      >
        {data.heading.Story}
      </h2>
      <p className="Story">
        {data.code} {data.textIcon.alien}
        Hey there! I’m **Daksh** — a curious coder 👨‍💻 from India, now creating
        magic in Canada 🍁.
        {data.textIcon.degree} I graduated with a Bachelor’s in Engineering from
        Gujarat Technological University and topped it off with a Postgrad from
        Conestoga College, where I leveled up my tech game.
        {data.textIcon.writing} Currently geeking out on **Azure** and all
        things **Cloud** — chasing that next big "aha!" moment in tech.
        {data.textIcon.codeBoy} Whether it's frontend flair or backend brains, I
        love turning ideas into clean, working code.
        {data.textIcon.greenDot} Let’s build something awesome — one line of
        code at a time.
      </p>
    </Stack>
  );
};

export default Story;
