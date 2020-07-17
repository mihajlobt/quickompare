import { program } from 'commander';
import { commaSeparatedList, compareJSON} from './src/utils';


const compareExample = `Compare JSON files. Example usage: - $ quickompare --compare /Users/username/Documents/someFile.json,/Users/username/Documents/otherFile.json`
program.description("A program for comparing two JSON files/objects").option('-c, --compare <items>', compareExample, commaSeparatedList)
program.parse(process.argv)

if (program.compare && program.compare.length > 1) {
    compareJSON(program.compare[0], program.compare[1])
}



