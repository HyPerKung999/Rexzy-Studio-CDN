// success warning error info question

function AlertSend({
  icon,
  title,
  text,
  confirmButtonColor,
  cancelButtonColor,
  confirmButtonText,
  cancelButtonText,
  showCancelButton
}) {
  return new Promise((resolve) => {
    setInterval(() => { }, 5000);
    if (icon == null) icon = "info";
    if (title == null) title = "";
    if (text == null) text = "";
    if (showCancelButton == null) showCancelButton = false;
    if (confirmButtonColor == null) confirmButtonColor = "#3085d6";
    if (cancelButtonColor == null) cancelButtonColor = "#d33";
    if (confirmButtonText == null) confirmButtonText = "ตกลง";
    if (cancelButtonText == null) cancelButtonText = "ยกเลิก";

    if (icon == "question") {
      Swal.fire({
        icon: icon,
        title: title,
        html: text,
        showCancelButton: showCancelButton,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText
      }).then((result) => {
        resolve({ isConfirmed: result.isConfirmed });
      })
    } else {
      if (confirmButtonText) {
        Swal.fire({
          icon: icon,
          title: title,
          html: text,
          showCancelButton: showCancelButton,
          confirmButtonColor: confirmButtonColor,
          confirmButtonText: confirmButtonText,
        }).then((result) => {
          resolve({ isConfirmed: result.isConfirmed });
        })
      } else {
        Swal.fire({
          icon: icon,
          title: title,
          html: text,
        }).then((result) => {
          resolve({ isConfirmed: result.isConfirmed });
        })
      }
    }
  })
}