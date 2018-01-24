import fs from 'fs-extra'
import CasparCG from 'caspar-cg'
import config from './config'

async function copyFiles() {
  return fs.copy(`./caspar/`, `${config.casparTemplatePath}/${config.casparTemplateDirectory}`)
}

function updateCaspar() {
  const ccg = new CasparCG(config.casparHost, config.casparPort)
  ccg.connect(function () {
    ccg.clear('1')
    ccg.play('1-1', 'AMB', { loop: true })
    ccg.play('1-10', `${config.casparTemplateDirectory}/${config.templateName}`)
  })
}

async function update() {
  await copyFiles()
  updateCaspar()
}

update()
