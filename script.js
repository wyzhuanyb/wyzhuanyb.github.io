const inputVal = document.querySelector(".input-val");
const outputVal = document.querySelector(".output-val");
const transBtn = document.querySelector("button");

console.log("To text this app, you could enter: سەكرىۋال، دەپ تىللىغىنىچە قايتىپ تى")

//Library function to store language words. 
function wylibrary(text, result) {
  for (let i in text) {
    
    //这里是测试，输入I 或者i 将自动转换成“我”
    if (text[i] === "چ") {
      result += "tʃ";
    }

    else if (text[i] === "ۋ") {
      result += "w";
    }

    else if (text[i] === "ې") {
      result += "e";
    }

    else if (text[i] === "ر") {
      result += "r";
    }

    else if (text[i] === "ت") {
      result += "t";
    }

    else if (text[i] === "ي") {
      result += "j";
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

    else if (text[i] === "ھ") {
      result += "h";
    }

    else if (text[i] === "س") {
      result += "s";
    }


    else if (text[i] === "ف") {
      result += "f";
    }

    else if (text[i] === "ق") {
      result += "q";
    }

    else if (text[i] === "د") {
      result += "d";
    }
    else if (text[i] === "ا") {
      result += "a";
    }


    else if (text[i] === "ژ") {
      result += "ʒ";
    }

    else if (text[i] === "خ") {
      result += "χ";
    }

    else if (text[i] === "ج") {
      result += "dʒ";
    }


    else if (text[i] === "ۆ") {
      result += "ɵ";
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

    else if (text[i] === "ب") {
      result += "b";
    }


    else if (text[i] === "ى") {
      result += "i";
    }

    else if (text[i] === "م") {
      result += "m";
    }
    else if (text[i] === "گ") {
      result += "g";
    }

    else if (text[i] === "ز") {
      result += "z";
    }

    else if (text[i] === "ش") {
      result += "ʃ";
    }

    else if (text[i] === "غ") {
      result += "ʁ";
    }


    else if (text[i] === " ") {
      result += " ";
    }

    else if (text[i] === "؟") {
      result += "?";
    }

    else if (text[i] === "،") {
      result += ",";
    }

    else if (text[i] === ".") {
      result += ".";
    }

    else if (text[i] === "ئ") {
      result += "";
    }

    /*******************************************************************/

    else {
      result += text[i];
    }
  }
  
  return result;
}
 /*****************************************************************/
//哈语库！


function hylibrary(text, result) {
  for (let i in text) {
    
    if (text[i] === "哈语") {
      result += "";
    }
      
    else if (text[i] === "    ") {
      result += "    ";
    }

      
      
    else {
      result += text[i];
    }
  }
  
  return result;
}
    /*****************************************************************/


//EventListener for translate btn.
transBtn.addEventListener("click", () => {
  let text = inputVal.value;

  let result = [];

  result = wylibrary(text, result);

  outputVal.value = result;

})


