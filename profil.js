      document.addEventListener("DOMContentLoaded", function () {
        // Handle date input focus/blur
        const dateInputs = document.querySelectorAll("input[onfocus]");
        dateInputs.forEach((input) => {
          input.addEventListener("focus", function () {
            this.type = "date";
          });
          input.addEventListener("blur", function () {
            if (!this.value) this.type = "text";
          });
        });
      });
