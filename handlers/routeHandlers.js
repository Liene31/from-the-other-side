import { getData } from "../utils/getData.js";

export async function handleGet() {
  //   await getData();
  console.log(await getData());
}
