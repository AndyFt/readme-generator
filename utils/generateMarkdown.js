// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license}.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.username}/${data.repo}/blob/master/LICENSE)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the project, please feel free to reach out to me at [${data.questions}](mailto:${data.questions}).
`;
}

module.exports = generateMarkdown;
