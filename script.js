document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("myTextArea");
  const button = document.getElementById("myBtn");
  const selections = ["skeletal", "muscle", "custom"];
  const keyWords = ["add:", "remove:"];
  const skprt = ["skull", "spine", "thorax", "arm", "legs"];
  const musprt = ["head", "chest", "arm", "legs"];
  const spcpart = "skin";
  const cstprt = ["t-shirt", "pants", "shoes", "cap"];
  const lineNum = document.getElementById("myLabel");
  let num = 0;

  rowNumer();

  button.addEventListener("click", () => {
    let rowNum = input.value.split("\n");

    for (let i = 0; i < rowNum.length; i++) {
      if (rowNum[i].includes(selections[0])) {
        skelFun();
      } else if (rowNum[i].includes(selections[1])) {
        musFun();
      } else if (rowNum[i].includes(selections[2])) {
        customFun();
      }
    }
  });

  function rowNumer() {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        num++;
        lineNum.innerHTML += num + "<br>";
      }
    });

    document.onkeydown = function (event) {
      const key = event.key;

      if (key == "Backspace") {
        lineNum.innerHTML -= num + "<br>";

        if (num > 0) {
          num = num - 1;
        }
      }
    };
  }

  function skelFun() {
    let text = input.value;

    const regex = /\(([\s\S]*?)\)/g;
    const matches = text.match(regex);
    const result = matches
      ? matches.map((match) => match.slice(1, -1).trim())
      : [];

    result.forEach((item) => {
      let lines = item
        .split(";")
        .map((line) => line.trim())
        .filter((line) => line);
      lines.forEach((line) => {
        if (line.startsWith(keyWords[0])) {
          console.log("Přidat: " + line.slice(4).trim());
        } else if (line.startsWith(keyWords[1])) {
          console.log("Odstranit: " + line.slice(4).trim());
        }
      });
    });
  }
});
