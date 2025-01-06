import { exec as execSync } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execSync);

try {
  const { stdout, stderr } = await exec("fish -c 'fish_config theme demo'");
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
} catch (e) {
  console.error(e);
}
