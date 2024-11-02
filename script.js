function clickButton() {
  Swal.fire({
    title: "Apakah Beverly suka Arel?",
    showDenyButton: true,
    confirmButtonText: "Iya",
    denyButtonText: "Tidak",
  }).then((res) => {
    if (res.isConfirmed) {
      Swal.fire(
        "Arel akan senang",
        "Iya lah siapa yang ga seneng jing 😂😂",
        "success"
      );
    } else {
      Swal.fire(
        "Arel akan membuat Beverly suka kepadanya",
        "emang bisa? 😓",
        "info"
      );
    }
  });
}
