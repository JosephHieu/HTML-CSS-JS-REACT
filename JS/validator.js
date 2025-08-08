// Đối tượng 'Validator'
function Validator(options) {
  var selectorRules = {};

  // hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage = rule.test(inputElement.value);

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  function validateEmail(inputElement, rule) {
    var errorElement =
      inputElement.parentElement.querySelector(".form-message");
    errorElement.innerText = "";
    inputElement.parentElement.classList.remove("invalid");
  }

  var formElement = document.querySelector(options.form);

  console.log(options.rules);

  if (formElement) {
    options.rules.forEach(function (rule) {
      selectorRules[rule.selector] = rule.test;

      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.addEventListener("blur", function () {
          // value: inputElement.value
          // test func: rule.test
          //   console.log(errorMessage);
          validate(inputElement, rule);
        });

        // Xử lý mỗi khi người dùng nhập vào input
        inputElement.addEventListener("input", function () {
          validateEmail(inputElement, rule);
        });
      }
    });

    console.log(selectorRules);
  }
}

// Định nghĩa rules
// Nguyên tắc của các rules
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lê => Không trả ra cái gì
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Để trống tao đấm chết";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(value) ? undefined : "Không được để trống email";
    },
  };
};

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min ? undefined : "Phải có ít nhất 6 ký tự";
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Mật khẩu không khớp";
    },
  };
};
