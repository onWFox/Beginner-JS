function greetingsUser() {
  let requestOfGreet = prompt("Здравствуете! Как вы?");
  let mathActive = prompt("Не хотите ли посчитать? Да или нет");
  switch (mathActive) {
    case "да":
    case "ДА":
    case "Да":
    case "дА":
      cakculater(result);
      break;
    case "нет":
    case "Нет":
    case "нЕТ":
    case "НЕТ":
      alert("Досвидание сударь или мадам. Приятно было пообщаться.");
      break;
    default:
      alert("У ДО СВИДАНИЯ");
  }
}
greetingsUser();

function cakculater() {
  let firstnum = +prompt("Введите первое число: ", 0);
  let secondnum = +prompt("Введите второе число: ", 0);
  let mathActive;
  let result;
  while (mathActive != "+" || "-" || "*" || "/") {
    mathActive = prompt(
      "Какое математическое действие хотите выполнить? (+_-_*_/)"
    );
  }
  switch (mathActive) {
    case "+":
      result = firstnum + secondnum;
      alert(result);
      break;

    case "-":
      result = firstnum - secondnum;
      alert(result);
      break;

    case "*":
      result = firstnum * secondnum;
      alert(result);
      break;

    case "/":
      result = firstnum / secondnum;
      alert(result);
      break;
    // default:
    //   alert("Вы что-то выбрали не то");
    
  }return(result);
}
