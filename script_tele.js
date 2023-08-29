var token = "";
var SheetID = "";

function doPost(e) {
  var stringJson = e.postData.getDataAsString();
  var updates = JSON.parse(stringJson);
 
    if(updates.message.text){
      sendText(updates.message.chat.id,CariBarangDariIDSheet(updates.message.text)); 
    }
}

function AmbilSheet1(){
  var rangeName = 'Sheet1!A2:C';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function AmbilSheet2(){
  var rangeName = 'Sheet2!A2:C';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function CariBarangDariIDSheet(IDbarang){
  var dataBarang = AmbilSheet1(); 
  for (var row = 0; row < dataBarang.length; row++) {
    if(dataBarang[row][0]==IDbarang){ 
      return "" + dataBarang[row][2] + "\n" +
             "" + dataBarang[row][1] ;
    }
  }

  var dataBarang = AmbilSheet2(); 
  for (var row = 0; row < dataBarang.length; row++) {
    if(dataBarang[row][0]==IDbarang){ 
      return "" + dataBarang[row][2] + "\n" +
             "" + dataBarang[row][1] ;
    }
  }
  return "ID tidak Terdaftar, ketik /Site Untuk Menampilkan data 😉"
}

function sendText(chatid,text,replymarkup){
var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatid),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(replymarkup)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}








