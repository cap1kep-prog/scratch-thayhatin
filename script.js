function nopBai() {
  const noiDung = "Bài của học sinh";
  const data = btoa(unescape(encodeURIComponent(noiDung)));

  fetch("LINK_APPS_SCRIPT", {
    method: "POST",
    body: JSON.stringify({ data: data })
  });
}
