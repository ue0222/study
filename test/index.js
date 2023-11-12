const a = 25;
const b = 80;

if (a == b) {
  console.log("동갑이다");
} else if (a < b) {
  console.log("연하다");
} else {
  console.log("연상이다");
}

switch (a) {
  case 10:
    console.log("10대 이다");
    break;
  case 20:
    console.log("20대 이다");
    break;
  case 30:
    console.log("30대 이다");
    break;
  case 40:
    console.log("40대 이다");
    break;
  case 50:
    console.log("50대 이다");
    break;
  case 60:
    console.log("60대 이다");
    break;
  case 70:
    console.log("70대 이다");
    break;
  case 80:
    console.log("80대 이다");
    break;
  case 90:
    console.log("90대 이다");
    break;
  default:
    console.log("사람이 아니다");
}
