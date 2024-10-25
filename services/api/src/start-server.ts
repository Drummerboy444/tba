import { getRandomLetter } from "@tba/utils";

export const startServer = () => {
  Deno.serve(() => {
    const randomLetter = getRandomLetter();
    return new Response(`Your random letter was "${randomLetter}"`);
  });
};
