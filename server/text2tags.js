var skills = require('./skills.json')
var jobs = require('./jobs.json')

function myFunction (texto) {
  var skillsEncontradas = []
  var jobsEncontrados = []
  for (var i = 0, len = skills.length; i < len; i++) {
    for (var j = 0, len2 = texto.length; j < len2; j++) {
      if (skills[i] === texto.length[j]) {
        skillsEncontradas.push(skills[i])
        i = len
        j = len2
      }
    }
  }
  for (var x = 0, len3 = jobs.length; x < len3; x++) {
    for (var y = 0, len4 = texto.length; y < len4; y++) {
      if (skills[x] === texto.length[y]) {
        jobsEncontrados.push(skills[x])
        x = len3
        y = len4
      }
    }
  }
  // falta testear esta funcións
  var jsonSkillsE = JSON.parse(JSON.stringify(skillsEncontradas))
  var jsonJobsE = JSON.parse(JSON.stringify(jobsEncontrados))
  return [jsonJobsE, jsonSkillsE]
}

myFunction(['java', 'python'])
