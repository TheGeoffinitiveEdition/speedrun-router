import type { Route } from "../../classes/Route";
import { dk64Colors, titleColors } from "../../utils/colors";

export const dk64AnyNoISG: Route = {
  title: "Any% No ISG",
  headerColor: titleColors.dk64,
  doc: "https://www.twitch.tv/videos/2274516884",
  steps: [
    `${dk64Colors.header} Note: This route skips Rocketbarrel and Mini Monkey.`,
    `${dk64Colors.dk} Cranky, training barrels`,
    `${dk64Colors.dk} Return to Cranky, get Slam, wet escape`,
    `${dk64Colors.dk} Tag W4, DK TBS to Helm Lobby, Helm Early`,
    `${dk64Colors.header} *Helm`,
    `${dk64Colors.dk} DK Helm, Key 8, double phasewalk escape`,
    `${dk64Colors.header} *Isles to Aztec`,
    `${dk64Colors.dk} Deathwarp, leave Helm lobby`,
    `${dk64Colors.dk} Fall to STS in BFI`,
    `${dk64Colors.dk} 2 crystals, rainbow coin under Caves`,
    `${dk64Colors.dk} Moonkick toward Aztec, moonkick to rainbow coin on Aztec roof, Aztec early`,
    `${dk64Colors.header} *Aztec`,
    `${dk64Colors.dk} Phasewalk to skip llama cutscene`,
    `${dk64Colors.dk} Key 5, RESET`,
    `${dk64Colors.header} Story Skip on, enter file`,
    `${dk64Colors.dk} Turn in Keys 8 & 5, Castle Early`,
    `${dk64Colors.header} *Castle`,
    `${dk64Colors.dk} Airswim to crypt`,
    `${dk64Colors.dk} To Funky T&S, free Lanky`,
    `${dk64Colors.diddy} Free Diddy, exit T&S, buy Peanut, RESET`,
    `${dk64Colors.header} Story Skip on again, enter file`,
    `${dk64Colors.dk} W4 to Factory Lobby`,
    `${dk64Colors.lanky} Factory Early`,
    `${dk64Colors.header} *Factory`,
    `${dk64Colors.lanky} Hatch skip, free Chunky, enter T&S`,
    `${dk64Colors.dk} Enter boss x2, Key 3`,
    `${dk64Colors.dk} Climb to tag by Cranky`,
    `${dk64Colors.chunky} Buy up to Primate Punch`,
    `${dk64Colors.lanky} Buy Trombone, exit Factory`,
    `${dk64Colors.header} *Isles to K. Rool`,
    `${dk64Colors.dk} Leave Factory Lobby, turn in Key 3`,
    `${dk64Colors.dk} Phasewalk to void to warps, enter K. Rool`,
    `${dk64Colors.header} *K. Rool`
  ]
};
