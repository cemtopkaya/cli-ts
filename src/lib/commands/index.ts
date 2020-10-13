import { SayCommand } from "./say";
import { StopCommand } from "./stop";

const commands = [new SayCommand().cmd, new StopCommand().cmd];
export { commands };
