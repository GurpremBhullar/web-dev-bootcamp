function generatemarkdown(answers) {
  return `
# ${answers.title} 

${answers.description} 

${answers.license} 

${answers.contributing} 

${answers.tests}
`;
}
module.exports = generatemarkdown;