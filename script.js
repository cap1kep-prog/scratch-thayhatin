async function nopBai() {
  try {
    let ten = prompt("Nhập tên của em:");
    let fileInput = document.getElementById("fileInput");

    if (!fileInput.files.length) {
      alert("Chưa chọn file!");
      return;
    }

    let file = fileInput.files[0];

    let reader = new FileReader();

    reader.onload = async function () {
      let base64 = reader.result.split(',')[1];

      await fetch("LINK_APPS_SCRIPT", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: ten + "_" + file.name,
          file: base64
        })
      });

      alert("✅ Đã gửi bài! (kiểm tra Drive)");
    };

    reader.readAsDataURL(file);

  } catch (err) {
    alert("❌ Lỗi: " + err);
  }
}
