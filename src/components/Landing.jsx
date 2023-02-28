import { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import HandleFiles from "./common/HandleFiles";
import { HandleInput } from "./common/HandleInput";

export const Landing = () => {
  return (
    <div>
      <p>
        This is a web app developped to interact with students and teachers and
        parents.
      </p>
      <p>A teacher can upload students marks</p>
      <p>Marks of every student will be send by SMS to each parent</p>
      <HandleFiles />
      <HandleInput />
    </div>
  );
};
