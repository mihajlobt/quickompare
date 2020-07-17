## CLI JSON Compare app

#### Libraries Used
* [Commander](https://github.com/tj/commander.js/) - for command line handling
* [Chalk](https://github.com/chalk/chalk) - for command line colors
* [StringSimilarity](https://github.com/aceakash/string-similarity) - for comparing strings

#### Features
* Minimal interface and libraries used, for optimal speed.
* NodeJS ESM modules
* ES6 Syntax

#### Install
    git clone repository
    'yarn install' in repository root

#### How to Use
    use 'yarn start --compare <items>'

or
    
    run 'yarn link' and use the app directly from the command line with its name: 
    $ quickompare --compare <items>
    

Example:

    $ quickompare --compare /Users/username/Documents/firstFile.json,/Users/username/Documents/secondFile.json

Paths should be divided with a comma and no whitespaces inbetween.
In data folder, there are sample JSON files that can be used for testing.

#### App help - to list all options and get help
    yarn start --help

or

    quickompare --help
    
#### Help
    A program for comparing two JSON files/objects

    Options:
    -c, --compare <items>  Compare JSON files. Example usage: - $ quickompare --compare /Users/username/Documents/someFile.json,/Users/username/Documents/otherFile.json
    -h, --help             display help for command