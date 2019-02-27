// eslint-disable-next-line no-unused-vars
import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet

declare var SpreadsheetApp: any
declare var GoogleAppsScript: any

export class SheetService {
  static getSheet(): Spreadsheet {
    return SpreadsheetApp.openById(
      '155Q99EbUxNMSH-lPUSaAaOdA4ks-2lePXQN5ZP1m7Ec'
    )
  }
}
