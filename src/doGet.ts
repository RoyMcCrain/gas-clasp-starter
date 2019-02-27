import { SheetService } from './sheet.service'
import { getDayFormat } from './util'

declare var MailApp: any
declare var ContentService: any
export default function(e: any): void {
  const ss = SheetService.getSheet()
  const params: any = e.parameter
  ss.appendRow([getDayFormat(), JSON.stringify(e.parameter)])
  const body = `
 ${params.name}様

この度は弊社採用選考にエントリー頂きまして、
ありがとうございます。
下記内容にて、受信致しました。
追って採用担当よりご連絡致します。


名前
  ${params.name}
フリガナ
  ${params.read}
性別
  ${params.gender}
生年月日
  ${params.birth}
最終学歴
  ${params.schoolName} ${params.schoolOption}
卒業(予定)年度
  ${params.graduation}
郵便番号
  ${params.postal}
住所
  ${params.address}
連絡先電話番号
  ${params.telephone}
メールアドレス
  ${params.mail}
応募職種
  ${params.jobs}
志望動機
  ${params.reason}
自己PR
  ${params.prtext}
資格
  ${params.license}
質問連絡事項
  ${params.aside}

数日経っても返信がない場合は、大変お手数ですが
下記までご連絡下さい。
recruiting@kanamekey.com

  `
  MailApp.sendEmail({
    to: params.mail,
    subject: 'ご応募ありがとうございました',
    body: body,
    noReply: true,
  })
  MailApp.sendEmail({
    to: 'recruiting@kanamekey.com',
    subject: '応募がありました',
    body: body,
    noReply: true,
  })
  //リクエストパラメータ名"text"の値を取得する
  const result = {
    message: 'ご応募ありがとうございました',
  }
  return ContentService.createTextOutput(
    e.parameter.callback + '(' + JSON.stringify(result) + ')'
  ).setMimeType(ContentService.MimeType.JAVASCRIPT)
}
