let tt = document.querySelector('.timetable');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
tt.innerHTML = 'Розклад:<br>1. Зарубіжна література<br>2. Фізкультура<br>3. Алгебра<br>4. Фізика<br>5. Геометрія<br>6. Біологія<br>7. Англійська мова';
b1.addEventListener('click', function() {tt.innerHTML = 'Розклад:<br>1. Зарубіжна література<br>2. Фізкультура<br>3. Алгебра<br>4. Фізика<br>5. Геометрія<br>6. Біологія<br>7. Англійська мова'});
b2.addEventListener('click', function() {tt.innerHTML = 'Розклад:<br>1. Алгебра<br>2. Хімія<br>3. Історія України<br>4. Українська література<br>5. Німецька мова<br>6. Інформатика<br>7. Всесвітня історія'});
b3.addEventListener('click', function() {tt.innerHTML = 'Розклад:<br>1. Зарубіжна література<br>2. Мистецтво<br>3. Фізкультура<br>4. Географія/Історія України<br>5. Основи правознавства<br>6. Українська мова<br>7. Географія'});
b4.addEventListener('click', function() {tt.innerHTML = 'Розклад:<br>1. Фізика<br>2. Біологія<br>3. Англійська мова<br>4. Фізкультура<br>5. Українська мова<br>6. Хімія<br>7. Німецька мова'});
b5.addEventListener('click', function() {tt.innerHTML = 'Розклад:<br>1. Геометрія<br>2. Фізика<br>3. Українська література<br>4. Інформатика<br>5. Трудове навчання<br>6. Основи здоров\'я'});
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let mainColor = rootStyles.getPropertyValue('--mainColor');
console.log(mainColor); // '#ffeead'"
let input = document.querySelector('input[type="checkbox"]');

let mainColorDark = "white";
let digColorDark = "0";
let gColor1Dark = "black";
let gColor2Dark = "grey";

let mainColorLight = "black";
let digColorLight = "255";
let gColor1Light = "red";
let gColor2Light = "orange";

// let now = new Date();
// let month = now.getMonth();
// month++;
// if (month == "12" or month == "1" or month == "2") {
// 	let season = "winter";
// } else if (month == "3" or month == "4" or month == "5") {
// 	let season = "spring";
// } else if (month == "6" or month == "7" or month == "8") {
// 	let season = "summer";
// } else if (month == "9" or month == "10" or month == "11") {
// 	let season = "autumn";
// }

let season = "winter";
if (season == "winter") {
	bgDark = "url(img/darkBg.jpg)";
	newsBgDark = "url(img/image_news.jpg)";


	bgLight = "url(img/image_bg_spring.png)";
	newsBgLight = "url(img/image9.jpg)";
}
check();
function check() {
	if (input.checked) {
		root.style.setProperty('--mainColor', mainColorDark);
		root.style.setProperty('--digColor', digColorDark);
		root.style.setProperty('--bg', bgDark);
		root.style.setProperty('--gColor1', gColor1Dark);
		root.style.setProperty('--gColor2', gColor2Dark);
		root.style.setProperty('--newsBg', newsBgDark);

	} else {
		root.style.setProperty('--mainColor', mainColorLight);
		root.style.setProperty('--digColor', digColorLight);
		root.style.setProperty('--bg', bgLight);
		root.style.setProperty('--gColor1', gColor1Light);
		root.style.setProperty('--gColor2', gColor2Light);
		root.style.setProperty('--newsBg', newsBgLight);
	}
}
let user = detect.parse(navigator.userAgent);
let deviceType = user.device.type;
$('body').addClass(deviceType);
