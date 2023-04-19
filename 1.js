function ConvertToFarengeit(Celsius){
    let Farenheit = (9 / 5) * Celsius + 32;
    alert('Цельсий: ' + Celsius +' , Фаренгейт: ' + Math.round(Farenheit));
    return Farenheit;
}
ConvertToFarengeit(prompt("Введите температуру в градусах по Цельсию: "))
