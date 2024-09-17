// success warning error info question

function AlertSend({
  icon,
  title,
  text,
  confirmButtonText,
  cancelButtonText,
  showCancelButton
}) {
  return new Promise((resolve) => {
    setInterval(() => { }, 5000);
    if (icon == null) icon = "info";
    if (title == null) title = "";
    if (text == null) text = "";
    if (cancelButtonText == null) cancelButtonText = "ยกเลิก";
    if (showCancelButton == null) showCancelButton = false;

    if (icon == "question") {
      Swal.fire({
        icon: icon,
        title: title,
        html: text,
        showCancelButton: showCancelButton,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
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
          confirmButtonColor: '#3085d6',
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