function doPost(e) {

  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);

  try {

    var sheet =
      SpreadsheetApp.openById("ID_GOOGLE_SHEET")
      .getSheetByName("Sheet1");

    var data =
      JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.hoten,
      data.lop,
      data.tenbai,
      data.link
    ]);

    output.setContent(
      JSON.stringify({
        status:"success"
      })
    );

    return output;

  } catch(err) {

    output.setContent(
      JSON.stringify({
        status:"error",
        message:err.toString()
      })
    );

    return output;

  }

}
