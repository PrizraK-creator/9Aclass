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
b5.addEventListener('click', function() {tt.innerHTML = 'Розклад:<br>1. Геометрія<br>2. Фізкультура<br>3. Українська література<br>4. Інформатика<br>5. Трудове навчання<br>6. Основи здоров\'я'});
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let mainColor = rootStyles.getPropertyValue('--mainColor');
console.log(mainColor); // '#ffeead'"
let input = document.querySelector('input[type="checkbox"]');
function check() {
	if (input.checked) {
		root.style.setProperty('--mainColor', 'white');
		root.style.setProperty('--digColor', '0');
	} else {
		root.style.setProperty('--mainColor', 'black');
		root.style.setProperty('--digColor', '255');
	}
}


var name = $('input[name=fio]').val();
 var tel = $('input[name=tel]').val();
 var otpravka = true;
 if(name==""){
 otpravka = false;
 }
 if(tel ==""){
 otpravka = false;
 }

dannie = {'polz_name':name, 'polz_tel':tel};

if(otpravka)
 {
 $.post('send.php', dannie, function(otvet){
 rezultat = '<div>'+otvet.text+'</div>';
 $("#form_result").hide().html(rezultat).slideDown();
 }, 'json');
 }