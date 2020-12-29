/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'wxa_level=1; retina=0; jxsid=16092048562531879806; webp=1; visitkey=16524633088081009; __jdv=122270672%7Cdirect%7C-%7Cnone%7C-%7C1609204857267; __jdc=122270672; mba_muid=16092048572651962249749; shshshfpa=cd66e595-db33-91fa-3e1d-1364aa94cb5a-1609204872; PPRD_P=UUID.16092048572651962249749; sc_width=1366; shshshfpb=hhxAFKcRcAO%20sbce1EOW%20Tg%3D%3D; __jda=122270672.16092048572651962249749.1609204857.1609204857.1609208682.2; 3AB9D23F7A4B3C9B=NBT5H7HF74QFBRKIF76YMSAQ6KBA3WEH76VKPYNCMRSQ5ECCC3C6OXS7OV2BP3C55YVM7TBUXD75DVYGWWYVC5HTYA; TrackerID=Tk8i54a5PE_Uo4fmmhbSk__oD53JJVEPA6WPwzDlk8I7WQWTZTOPU59B6qM1vIr8oKhTR0GnhhCWK1iBjcXvtSxu0rukoq-iC2wYeS5ExDU; pt_key=AAJf6pU9AEDzRFUV6S4c3JYoHkS7OEfIYjVChOKtFsNl6sUARLKXg-R-WVbvFJH4gAv8oXRW8OiDNKyyx2nL8NthPyb6XWvZ; pt_pin=%E8%AF%A5%E8%B5%B0%E7%9A%84%E7%A6%BB%E5%BC%80%E4%BA%86; pt_token=r7g6orfx; pwdt_id=%E8%AF%A5%E8%B5%B0%E7%9A%84%E7%A6%BB%E5%BC%80%E4%BA%86; sfstoken=tk01mb6dd1c3fa8sMyszeDJ1MmlNNnSgGp98RHs4QOxUUXLM/E4aFaNl0hqbfDBxIlUIsWU7Lrn85q5iPrkHUnD+rzX3; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; shshshfp=50fbb6da7e2f51ed4026a4b47594a84a; cid=9; wqmnx1=MDEyNjM4Ny9qeW9vNDhpIHM7IHB0ICBjby4gNTNmVTJWTykoKQ%3D%3D; __wga=1609209177638.1609208689478.1609204911125.1609204911125.8.2; jxsid_s_t=1609209177758; __jdb=122270672.15.16092048572651962249749|2.1609208682; mba_sid=16092086784748423574682698765.15; shshshsID=b99ccaccdf87e5ca39bad53c307beb2e_9_1609209178144',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else if (process.env.JD_COOKIE.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    CookieJDs = process.env.JD_COOKIE.split('\\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
  CookieJDs = [...new Set(CookieJDs)]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
