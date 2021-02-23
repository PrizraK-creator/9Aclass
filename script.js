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
// let m = month + 1;
// if (m == "12" or m == "1" or m == "2") {
// 	let season = "winter";
// } else if (m == "3" or m == "4" or m == "5") {
// 	let season = "spring";
// } else if (m == "6" or m == "7" or m == "8") {
// 	let season = "summer";
// } else if (m == "9" or m == "10" or m == "11") {
// 	let season = "autumn";
// }

let season = "winter";
if (season == "winter") {
	bgDark = "url(img/darkBg.jpg)";
	newsBgDark = "url(img/image_news.jpg)";
	headBgDark = "url(img/image5_dark.jpg)";


	bgLight = "url(img/image_bg_spring.png)";
	newsBgLight = "url(img/image9.jpg)";
	headBgLight = "url(img/image5.png)";
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
		root.style.setProperty('--headBg', headBgDark);

	} else {
		root.style.setProperty('--mainColor', mainColorLight);
		root.style.setProperty('--digColor', digColorLight);
		root.style.setProperty('--bg', bgLight);
		root.style.setProperty('--gColor1', gColor1Light);
		root.style.setProperty('--gColor2', gColor2Light);
		root.style.setProperty('--newsBg', newsBgLight);
		root.style.setProperty('--headBg', headBgLight);
	}
}
let user = detect.parse(navigator.userAgent);
let deviceType = user.device.type;
$('.timetable').addClass(deviceType);
$('.sites').addClass(deviceType);
