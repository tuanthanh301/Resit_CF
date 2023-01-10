// Viết một function nhận vào một số number và tứ đó tạo ra mưa đá từ số number đó (Hailstone)
// Trình tự Hailstone tuân theo các quy tắc sau:
// Nếu number là số chẵn, thì số tiếp theo sẽ được chia (divided) cho 2
// Ngược lại, nếu là một số lẻ, số tiếp theo sẽ được nhân (multiplied) cho 3 và cộng thêm 1
// Ví dụ bắt đầu với số 7, trình tự Hailstone sẽ là 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1
// Các chuỗi số như vậy được gọi là trình tự mưa đá (Hailstone) 
// vì các giá trị thường tăng và giảm, nó tương tự như một trận mưa đá bên trong một đám mây.
function hailstone(numb){
    let number = numb
    let sequence = []
    do{
        if (number % 2  === 0) {
            number = number / 2;
            console.log(number);
        }
        else if (number % 2 === 1){
            number = number * 3 + 1
            console.log(number);
        }
    }while (number !== 1);
    return sequence
}
hailstone(10);
