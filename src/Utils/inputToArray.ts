import fs, {readFileSync} from "fs";

export function readInputFile(filePath: fs.PathOrFileDescriptor): number[] {
  let input: number[] = [];
  const data = readFileSync(filePath, "utf8");
  const stringInput = data.toString().split("\n");
  for (const i in stringInput) {
    input.push(Number(stringInput[i]));
  }
  return input;
}
