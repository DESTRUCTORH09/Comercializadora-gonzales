function contactProduct(name) {
  const phone = "+528123456789";
  const text = encodeURIComponent("Hola, deseo información sobre: " + name);
  window.open("https://wa.me/" + phone.replace("+", "") + "?text=" + text, "_blank");
}

function addComment(event) {
  event.preventDefault();
  const name = document.getElementById("cname").value.trim();
  const msg = document.getElementById("cmsg").value.trim();
  if (!name || !msg) return;
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<strong>${name}</strong><br>${msg}`;
  document.getElementById("comments-list").prepend(div);
  event.target.reset();
}
