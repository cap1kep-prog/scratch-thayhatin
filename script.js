async function nopBai() {
  try {
    let ten = prompt("Nhập tên của em:");

    if (!ten) {
      alert("Chưa nhập tên!");
      return;
    }

    const noiDung = "Bài của " + ten;

    const data = btoa(unescape(encodeURIComponent(noiDung)));

    const response = await fetch("https://script.google.com/macros/s/AKfycbybZuPRNcaE2HuTNpL5Y4u6SjNM7DAyXMEYWA_d0NPvI5Dbpw_6byfs12dtERIf1SELnA/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: ten + "_" + Date.now() + ".txt",
        file: data
      })
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("✅ Nộp bài thành công!");
    } else {
      alert("❌ Lỗi!");
    }

  } catch (err) {
    alert("❌ Lỗi: " + err);
  }
}
