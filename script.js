async function nopBai() {
  try {
    let ten = prompt("Nhập tên của em:");

    const response = await fetch("https://script.google.com/macros/s/AKfycbznmu6bq1h1gU65vjNSBCCcG8vr5WnU46R53_030Sptysfk6qOD0G7k6vLxhSZcoZbKcQ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: ten + "_" + Date.now() + ".txt",
        file:const data = btoa(unescape(encodeURIComponent(noiDung)));
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
