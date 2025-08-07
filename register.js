    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");

        form.addEventListener("submit", function (e) {
          e.preventDefault();

          const inputs = form.querySelectorAll("input");
          let isValid = true;

          inputs.forEach((input) => {
            if (!input.value.trim()) {
              input.classList.add("border", "border-red-500");
              isValid = false;
            } else {
              input.classList.remove("border", "border-red-500");
            }
          });

          if (isValid) {
            // Form submission logic would go here
            alert("Registration successful!");
          }
        });

        // Remove error styling on input
        const inputs = form.querySelectorAll("input");
        inputs.forEach((input) => {
          input.addEventListener("input", function () {
            if (input.value.trim()) {
              input.classList.remove("border", "border-red-500");
            }
          });
        });
      });