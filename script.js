const inputVal = document.querySelector(".input-val");
const outputVal = document.querySelector(".output-val");
const transBtn = document.querySelector("button");


function myLibrary(text, result) {
    for (let i in text) {

        //这里是测试，输入I 或者i 将自动转换成“我”
        if (text[i] === "I") {
        }
    
        //从这开始修改
        /************************************************************************/
    
        else if (text[i] === "ئا") {
          result += "a";
        }
    
        else if (text[i] === "ر") {
          result += "r";
        }
    
    
        else if (text[i] === "چ") {
          result += "tʃ";
        }
    
        else if (text[i] === "ۋ") {
          result += "w";
        }
    
        else if (text[i] === "ت") {
          result += "t";
        }
    
        else if (text[i] === "ۇ") {
          result += "u";
        }
    
        else if (text[i] === "ڭ") {
          result += "ŋ";
        }
    
        else if (text[i] === "و") {
          result += "o";
        }
    
        else if (text[i] === "پ") {
          result += "p";
        }
    
        else if (text[i] === "ې") {
          result += "e";
        }
    
    
        else if (text[i] === "ي") {
          result += "j";
        }
    
        else if (text[i] === "ۆ") {
          result += "ɵ";
        }
    
        else if (text[i] === "ئ") {
          result += "";
        }
    
        else if (text[i] === "ل") {
          result += "l";
        }
    
        else if (text[i] === "ۈ") {
          result += "y";
        }
    
        else if (text[i] === "ك") {
          result += "k";
        }
    
        else if (text[i] === "ە") {
          result += "ɛ";
        }
    
        else if (text[i] === "ن") {
          result += "n";
        }
    
        else if (text[i] === "د") {
          result += "d";
        }
    
        else if (text[i] === "ئى") {
          result += "i";
        }
    
        else if (text[i] === "م") {
          result += "m";
        }
        else if (text[i] === "گ") {
          result += "g";
        }
    
        else if (text[i] === " ") {
          result += " ";
        }
    
        else if (text[i] === "؟") {
          result += "?";
        }
    
        else if (text[i] === "، ") {
          result += ",";
        }
    
        else if (text[i] === ".") {
          result += ".";
        }
    
        /************************************************************************/
    
        else {
          result += text[i];
        }

    
    }
    return result;
}



transBtn.addEventListener("click", () => {
  let text = inputVal.value;

  let result = [];

  result = myLibrary(text, result);

  outputVal.value = result;
  
})
