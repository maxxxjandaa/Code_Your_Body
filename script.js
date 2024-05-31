const input = document.getElementById("myTextArea");
const button = document.getElementById("myBtn");
const keyWords = "add";

button.addEventListener("click", () => {
  let rowNum = input.value.split("\n");
  let keyWordsNum = -1;

  for (let i = 1; i < rowNum.length; i++) {
    if (rowNum[i].indexOf(keyWords) !== -1) {
      keyWordsNum = i;
      break;
    }
    if (keyWordsNum !== -1) {
      console.log("win");
    }
  }
});

// function checkCode(input, rowNum, keyWordsNum, keyWordApperd) {
//   for (i = 1; i <= rowNum; i++) {
//     if (input.indexOf("add") !== -1 && rowNum == i) {
//       keyWordsNum++;
//       keyWordApperd = true;
//     }
//   }
//   console.log(keyWordsNum, rowNum);
// }
