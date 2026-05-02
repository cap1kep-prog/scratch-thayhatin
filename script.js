const API_URL = "https://script.google.com/macros/s/AKfycbz-hdBLZfVCTcPoaHXxJzqXrnDMFjyoMCyomJpGnLLB0W9jngqm7KCgEqdJhrSut9w3Wg/exec"; // 🔥 thay link

// MỞ SCRATCH
function openScratch(){
  window.open("https://scratch.mit.edu/projects/editor", "_blank");
}

// NỘP BÀI
function submitData(){
  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];

  const name = document.getElementById('name').value.trim();
  const cls = document.getElementById('class').value.trim();
  const title = document.getElementById('title').value.trim();

  if(!name || !cls || !title){
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  if(!file){
    alert("Vui lòng chọn file .sb3");
    return;
  }

  if(!file.name.endsWith(".sb3")){
    alert("Chỉ chấp nhận file .sb3");
    return;
  }

  const reader = new FileReader();

  reader.onload = function(){
    const base64 = reader.result.split(',')[1];

    const data = {
      name: name,
      class: cls,
      title: title,
      fileName: file.name,
      file: base64
    };

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(res => {
      alert("✅ Nộp bài thành công");
      document.getElementById("file").value = "";
    })
    .catch(err => {
      alert("❌ Lỗi gửi bài");
      console.error(err);
    });
  };

  reader.readAsDataURL(file);
}
