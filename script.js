async function nopBai() {
  try {
    let ten = prompt("Nhập tên của em:");

    const response = await fetch("DÁN_LINK_APPS_SCRIPT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: ten + "_" + Date.now() + ".txt",
        file: btoa("Bài nộp của " + ten)
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
