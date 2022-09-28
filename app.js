const inquirer = require("inquirer");
const fs = require('fs');

const renderLicense = (license) => {
    if (license === "None"){
        return thisLicence = "None"
    } else {
        return thisLicence = `![](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
}

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide installation instructions'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What info should one know before using the project?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please provide info on contributing to the project'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What command should be run to test the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select your license type',
        choices: ['MIT', 'APACHE-2.0', 'GPL-3.0', 'BSD-3', 'None']
    },
    {
        type: 'input',
        name: 'gitUser',
        message: 'Please provide your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address'
    }
]).then(function(answer){
    console.log(answer)
    const markdown = `# ${answer.title}

## Description
    
${answer.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${answer.instructions}

## Usage
    
${answer.usageInfo}
    
## Credits
    
[${answer.gitUser}](https://github.com/${answer.gitUser}/) on github.

Contact me at ${answer.email}
    
## License
    
${renderLicense(answer.license)}
    
## How to Contribute
    
${answer.contributionGuidelines}

## Tests
    
${answer.testInstructions}`
    fs.writeFile('./README.md', `${markdown}`, function(err){
        if(err) return (err);
    })
})