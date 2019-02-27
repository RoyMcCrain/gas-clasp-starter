import doGet from './doGet'

declare var global: any
declare var Logger: any

global.doGet = doGet
global.testGet = function() {
  const e = {
    parameter: {
      name: 'name',
      read: 'read',
      gender: 'man',
      birth: '2017-09-09',
      schoolName: 'school_name',
      schoolOption: 'school_option',
      graduation: 'graduation',
      postal: 'postal',
      address: 'address',
      telephone: 'telephone',
      mail: 'mail',
      jobs: 'jobs',
      reason: 'reason',
      prtext: 'prtext',
      license: 'license',
      aside: 'aside',
      callback: 'myCallbackFunc',
    },
  }
  const out: any = doGet(e)
  const content = out.getContent()
  Logger.log('content=' + content)
}
