window.alert("selamat Datang di program penjumlahan sederhana menggunakan html & Javascript")
      function calculate() {
        const nilai1 = parseFloat(document.getElementById("nilai1").value);
        const nilai2 = parseFloat(document.getElementById("nilai2").value);
        const operator = document.getElementById("operator").value;

        if (isNaN(nilai1) || isNaN(nilai2)) {
          document.getElementById("result").value = "Invalid input";
          return;
        }

        let result;
        switch (operator) {
          case "+":
            result = nilai1 + nilai2;
            break;
          case "-":
            result = nilai1 - nilai2;
            break;
          case "*":
            result = nilai1 * nilai2;
            break;
          case "/":
            result = nilai2 !== 0 ? nilai1 / nilai2 : "Infinity";
            break;
          default:
            result = "Invalid operator";
            break;
        }

        document.getElementById("result").value = result;
      }
      calculate();