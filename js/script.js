function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("Nama harus di isi!");
  } else if (email == "") {
    return alert("Email harus di isi!");
  } else if (phone == "") {
    return alert("Phone harus di isi!");
  } else if (subject == "") {
    return alert("Subject harus di pilih!");
  } else if (message == "") {
    return alert("Message harus di isi!");
  }

  let emailReceiver = "subqitajul7@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, silakan kontak saya pada nomor ${phone}`;
  a.click();

  // <a href="mailto:subqitajul7@gmail.com?subject=Frontend&body=Bebas aja">
  //   Send Email
  // </a>;

  let data = { name, email, phone, subject, message };

  console.log(data);
}
