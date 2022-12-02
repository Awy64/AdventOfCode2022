import fs, {readFileSync} from "fs";

export function readInputFile(filePath: fs.PathOrFileDescriptor) {
  let input: string[] = [];
  const data = readFileSync(filePath, "utf8");
  const stringInput = data.toString().split("\n");
  for (const i in stringInput) {
    input.push(stringInput[i]);
  }
  return input;
}
