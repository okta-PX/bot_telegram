var token = "5367291558:AAHCFsZ-lgsiidvuZ1LuT2THjqjmo7GYJi4";
var SheetID = "1bhBA3S79R5jlMuSCRz5rsPW86SGQGzCejXj4i7fyDOY";

function doPost(e) {
  var stringJson = e.postData.getDataAsString();
  var updates = JSON.parse(stringJson);
 
  if(updates.message.text){
    sendText(updates.message.chat.id, findItemByID(updates.message.text)); 
  }
}

function getSheet1(){
  var rangeName = 'Sheet1!A2:C';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function getSheet2(){
  var rangeName = 'Sheet2!A2:C';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function getSheet3(){
  var rangeName = 'Sheet3!A2:C';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function getSheet4(){
  var rangeName = 'Sheet4!A2:C';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function findItemByID(itemID){
  var data = getSheet1(); 
  for (var row = 0; row < data.length; row++) {
    if(data[row][0] == itemID){ 
      return "" + data[row][2] + "\n" +
             "" + data[row][1];
    }
  }

  data = getSheet2(); 
  for (var row = 0; row < data.length; row++) {
    if(data[row][0] == itemID){ 
      return "" + data[row][2] + "\n" +
             "" + data[row][1];
    }
  }

  data = getSheet3(); 
  for (var row = 0; row < data.length; row++) {
    if(data[row][0] == itemID){ 
      return "" + data[row][2] + "\n" +
             "" + data[row][1];
    }
  }

  data = getSheet4(); 
  for (var row = 0; row < data.length; row++) {
    if(data[row][0] == itemID){ 
      return "" + data[row][2] + "\n" +
             "" + data[row][1];
    }
  }
  return "ID tidak Terdaftar. \nKetik /site untuk menampilkan data 😉\nBisa juga lihat tutor di /tutor";
}

function sendText(chatid, text, replymarkup){
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
