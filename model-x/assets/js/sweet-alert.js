// success warning error info question

function AlertSend({
  icon,
  title,
  text,
  confirmButtonColor,
  cancelButtonColor,
  confirmButtonText,
  cancelButtonText,
  showConfirmButton,
  showCancelButton
}) {
  return new Promise((resolve) => {
    setInterval(() => { }, 5000);
    if (icon == null) icon = "info";
    if (title == null) title = "";
    if (text == null) text = "";
    if (showConfirmButton == null) showConfirmButton = false;
    if (showCancelButton == null) showCancelButton = false;
    if (confirmButtonColor == null) confirmButtonColor = "#3085d6";
    if (cancelButtonColor == null) cancelButtonColor = "#d33";
    if (confirmButtonText == null) confirmButtonText = "ตกลง";
    if (cancelButtonText == null) cancelButtonText = "ยกเลิก";

    Swal.fire({
      icon: icon,
      title: title,
      html: text,
      showConfirmButton: showConfirmButton,
      showCancelButton: showCancelButton,
      confirmButtonColor: confirmButtonColor,
      cancelButtonColor: cancelButtonColor,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    }).then((result) => {
      resolve({ isConfirmed: result.isConfirmed });
    })
  })
}