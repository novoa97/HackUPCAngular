var skills = require('./skills.json')
var jobs = require('./jobs.json')
function findMyTags (skillsEncontradas, izquierda1, derecha1, jobsEncontrados, izquierda2, derecha2, palabra, finishedMyDictionary1, finishedMyDictionary2) {
  //  aplico búsqueda binaria en skills
  if (!finishedMyDictionary1) {
    var medio1 = (izquierda1 + derecha1) / 2
    var comparacion1 = skills[medio1].localeCompare(palabra)
    if (comparacion1 === 0) {
      finishedMyDictionary1 = true
      finishedMyDictionary2 = true
      skillsEncontradas.push(palabra)
    } else if (comparacion1 === 1) {
      izquierda1 = medio1 + 1
    } else {
      derecha1 = medio1 - 1
    }
    if (derecha1 < izquierda1) {
      finishedMyDictionary1 = true
    }
  }
  // aplico búsqueda binaria en jobs
  if (!finishedMyDictionary2) {
    var medio2 = (izquierda2 + derecha2) / 2
    var comparacion2 = jobs[medio2].localeCompare(palabra)
    if (comparacion2 === 0) {
      finishedMyDictionary1 = true
      finishedMyDictionary2 = true
      jobsEncontrados.push(palabra)
    } else if (comparacion2 === 1) {
      izquierda2 = medio2 + 1
    } else {
      derecha2 = medio2 - 1
    }
    if (derecha2 < izquierda2) {
      finishedMyDictionary2 = true
    }
  }
  if (finishedMyDictionary1 || finishedMyDictionary2) {
    findMyTags(skillsEncontradas, izquierda1, derecha1, jobsEncontrados, izquierda2, derecha2, palabra, finishedMyDictionary1, finishedMyDictionary2)
  }
}

function goodsearch (skillsEncontradas, jobsEncontrados, texto) {
  var derecha2 = jobs.length
  var derecha1 = skills.length
  var izquierda1 = 0
  var izquierda2 = 0
  var finishedMyDictionary1 = false
  var finishedMyDictionary2 = false
  for (var i = 0; i < texto.length; i++) {
    findMyTags(skillsEncontradas, izquierda1, derecha1, jobsEncontrados, izquierda2, derecha2, texto[i], finishedMyDictionary1, finishedMyDictionary2)
  }
}

function myFunction (texto) {
  var skillsEncontradas = []
  var jobsEncontrados = []
  // falta testear esta funcións
  goodsearch(skillsEncontradas, jobsEncontrados, texto)
  var jsonSkillsE = JSON.parse(JSON.stringify(skillsEncontradas))
  var jsonJobsE = JSON.parse(JSON.stringify(jobsEncontrados))
  return [jsonJobsE, jsonSkillsE]
}

myFunction(['java', 'python'])
