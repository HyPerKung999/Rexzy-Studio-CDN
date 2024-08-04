// Alert box design by Igor Ferrรฃo de Souza: https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/
// https://www.cssscript.com/alert-confirm-toast-cute/

// success warning error info question

var time = 0

function AlertSend({
  icon,
  title,
  text,
  buttonText,
  confirmButtonText,
  cancelButtonText,
  closeStyle,
}) {
  if (document.querySelector(".cute-alert-wrapper")) {
    time = 500
    document.querySelector(".cute-alert-wrapper").classList.add('cute-alert-hide')
    setTimeout(function () {
      document.querySelector(".cute-alert-wrapper").remove();
    }, 250)
  }

  return new Promise((resolve) => {
    setInterval(() => { }, 5000);
    setTimeout(function () {
      time = 0

      if (icon == null) icon = "info";
      if (title == null) title = "";
      if (text == null) text = "";
      if (buttonText == null) buttonText = "ตกลง";
      if (confirmButtonText == null) confirmButtonText = "ตกลง";
      if (cancelButtonText == null) cancelButtonText = "ยกเลิก";

      const body = document.querySelector("body");

      let closeStyleTemplate = "cute-alert-close";
      if (closeStyle === "circle") {
        closeStyleTemplate = "cute-alert-close-circle";
      }

      let btnTemplate = `
      <button id="cute-alert-confirm" class="cute-alert-button ${icon}-bg ${icon}-btn">${buttonText}</button>
      `;

      if (icon === "question") {
        btnTemplate = `
        <div class="question-buttons">
          <button id="cute-alert-confirm" class="confirm-button ${icon}-bg ${icon}-btn">${confirmButtonText}</button>
          <button id="cute-alert-cancel" class="cancel-button error-bg error-btn">${cancelButtonText}</button>
        </div>
        `;
      }

      const template = `
      <div class="cute-alert-wrapper">
        <div class="cute-alert-frame">
          <div class="cute-alert-header ${icon}-bg">
            <span class="${closeStyleTemplate}">X</span>
            <img class="cute-alert-img" src="https://raw.githubusercontent.com/HyPerKung999/Rexzy-Studio-CDN/main/model-x/assets/img/cute-alert/${icon}.svg" />
          </div>
          <div class="cute-alert-body">
            <span class="cute-alert-title">${title}</span>
            <span class="cute-alert-message">${text}</span>
            ${btnTemplate}
          </div>
        </div>
      </div>
      `;

      body.insertAdjacentHTML("afterend", template);

      const alertWrapper = document.querySelector(".cute-alert-wrapper");
      const alertFrame = document.querySelector(".cute-alert-frame");
      const alertClose = document.querySelector(`.${closeStyleTemplate}`);

      if (icon === "question") {
        const confirmButton = document.querySelector(".confirm-button");
        const cancelButton = document.querySelector(".cancel-button");

        confirmButton.addEventListener("click", () => {
          document.querySelector(".cute-alert-wrapper").classList.add('cute-alert-hide')
          resolve({ isConfirmed: true });
          setTimeout(function () {
            alertWrapper.remove();
          }, 250)
        });

        cancelButton.addEventListener("click", () => {
          document.querySelector(".cute-alert-wrapper").classList.add('cute-alert-hide')
          resolve({ isConfirmed: false });
          setTimeout(function () {
            alertWrapper.remove();
          }, 250)
        });
      } else {
        const alertButton = document.querySelector(".cute-alert-button");

        alertButton.addEventListener("click", () => {
          document.querySelector(".cute-alert-wrapper").classList.add('cute-alert-hide')
          resolve({ isConfirmed: true });
          setTimeout(function () {
            alertWrapper.remove();
          }, 250)
        });
      }

      alertClose.addEventListener("click", () => {
        document.querySelector(".cute-alert-wrapper").classList.add('cute-alert-hide')
        resolve({ isConfirmed: false });
        setTimeout(function () {
          alertWrapper.remove();
        }, 250)
      });

      alertWrapper.addEventListener("click", () => {
        document.querySelector(".cute-alert-wrapper").classList.add('cute-alert-hide')
        resolve({ isConfirmed: false });
        setTimeout(function () {
          alertWrapper.remove();
        }, 250)
      });

      alertFrame.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      
      document.querySelector('#cute-alert-confirm').focus()
    }, time)
  })
}

function cuteToast({ icon, text, timer = 5000 }) {
  return new Promise((resolve) => {
    if (document.querySelector(".cute-toast-container")) {
      document.querySelector(".cute-toast-container").remove();
    }
    const body = document.querySelector("body");

    const template = `
      <div class="cute-toast-container ${icon}-bg">
        <div>
          <div class="cute-toast-frame">
            <img class="cute-toast-img" src="https://raw.githubusercontent.com/HyPerKung999/Rexzy-Studio-CDN/main/model-x/assets/img/cute-alert/${icon}.svg" />
            <span class="cute-toast-message">${text}</span>
            <div class="cute-toast-close">X</div>
          </div>
          <div class="cute-toast-timer ${icon}-timer" style="animation: timer ${timer}ms linear;"/>
        </div>
      </div>
      `;

    body.insertAdjacentHTML("afterend", template);

    const toastContainer = document.querySelector(".cute-toast-container");

    setTimeout(() => {
      toastContainer.remove();
      resolve();
    }, timer);

    const toastClose = document.querySelector(".cute-toast-close");

    toastClose.addEventListener("click", () => {
      toastContainer.remove();
      resolve();
    });
  });
}
