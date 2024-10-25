import { getRandomLetter } from "@tba/utils";

Deno.serve(() => {
  const randomLetter = getRandomLetter();
  return new Response(`Your random letter was "${randomLetter}"`);
});
