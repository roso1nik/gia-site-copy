let timer = document.getElementById('timer');

let hours = 3;
let show__hours = 3;
let minutes = 55;
let show__minutes = 55;
let seconds = 0;
let show__seconds = 0;
function timerFunc() {
    seconds--;

    if(seconds < 0) {
        minutes--;
        seconds = 59;
    }
    if(minutes < 0) {
        hours--;
        minutes = 59;
    }


    if (seconds < 10) {
        show__seconds = `0${seconds}`;
    } else {
        show__seconds = `${seconds}`;
    }

    if (minutes < 10) {
        show__minutes = `0${minutes}`;
    } else {
        show__minutes = `${minutes}`;
    }

    if (hours == 0 && minutes == 0 && seconds == 0) {
        clearInterval(interval);
        timer.innerHTML = `Осталось: 00:00:00`;
        timer.style.color = 'red';
    } else {
        timer.innerHTML = `Осталось: 0${hours}:${show__minutes}:${show__seconds}`;
    }
    
}
const interval = setInterval(timerFunc, 1000);



let button_close = document.getElementById('popup__close');
button_close.addEventListener("click", popupToggle);
let button_personal = document.getElementById('for-personal');
button_personal.addEventListener("click", popupToggle);
let popup = document.getElementById('popup');

let popup__is__open = false;
var text__passIncorrect = document.getElementById('pass__incorrent');
function popupToggle() {
    if (popup__is__open == false) {
        popup.style.display = "flex";
        popup__is__open = true;
        text__passIncorrect.style.display = "none";
        slide__now = 1;
        h1_1.style.display = "flex";
        h1_2.style.display = "none";
        slide_1.style.display = "flex";
        slide_2.style.display = "none";
        pass.value = '';
        return
    }
    if (popup__is__open == true) {
        popup.style.display = "none";
        popup__is__open = false;
        text__passIncorrect.style.display = "none";
        slide__now = 1;
        slide_1.style.display = "flex";
        slide_2.style.display = "none";
        pass.value = '';
        input__blankValue.value = '';
        return
    }
}



let button__close1 = document.getElementById('popup__close1');
button__close1.addEventListener("click", popupToggle__1);
let button_personal1 = document.getElementById('name-pupil');
button_personal1.addEventListener("click", popupToggle__1);
let popup1 = document.getElementById('popup__name');

let popup__is__open1 = false;
function popupToggle__1() {
    if (popup__is__open1 == false) {
        popup1.style.display = "flex";
        popup__is__open1 = true;
        return
    }
    if (popup__is__open1 == true) {
        popup1.style.display = "none";
        popup__is__open1 = false;
        return
    }
}


let true__pass = 1234; // yeah its for test
let id = 12;
let blank__id = 1234;


let pass = document.getElementById('pass-org');
let pass__value = 0;

var button__endBot = document.getElementById('end-ques');


let text__warnEnd = document.getElementById('warnEnd');


let area__userAns = document.getElementById('user___answer');

let blank__howmuch = 0;
let text__blankHowMuch = document.getElementById('blank__howmuch');

function reloadData() {
    pass__value = pass.value;

    if (question_number_now == 15) {
        button__next.style.display = "none";
        //button__endBot.style.display = "block";
    } else {
        button__next.style.display = "block";
        //button__endBot.style.display = "none";
    }

    if (question_number_now == 1) {
        button__prev.style.display = "none";
        
    } else {
        button__prev.style.display = "block";
    }

    if (question_number_now == 13 || question_number_now == 14 || question_number_now == 15) {
        ans__boxInput.style.display = "none";
        ans__boxFile.style.display = "flex";
    } else {
        ans__boxInput.style.display = "flex";
        ans__boxFile.style.display = "none";
    }

    userAns__value = userAns.value;
    userFile__value = userFile.value
    //console.log(userAns__value)


    if (question_number_now == 2 || question_number_now == 7) {
        userAns.style.textTransform = 'uppercase';
    } else {
        userAns.style.textTransform = 'capitalize';
    }

    if (userAnswerIsWas[question_number_now-1] == false) {
        status__ques.style.color = `#ff0000`;
        status__ques.innerHTML = `ответ не сохранен`;
    } else {
        status__ques.style.color = `#008000`;
        status__ques.innerHTML = `ответ сохранен`;
    }

    if (userAnswerIsWas[question_number_now-1] == false) {
        status__file.style.color = `#ff0000`;
        status__file.innerHTML = `ответ не сохранен`;
    } else {
        status__file.style.color = `#008000`;
        status__file.innerHTML = `ответ сохранен`;
    }


    if (howmuchanswers == 15) {
        text__warnEnd.innerHTML = `Внимание: Вы сохранили ответы на все вопросы, но мы рекомендуем проверить все Ваши ответы еще раз`;
        over__end.style.display = 'flex';
    }


    if (userAnswers[question_number_now-1] != '') {
        area__userAns.innerHTML = `<b>1:</b>&nbsp;${userAnswers[0]}<br><b>2:</b>&nbsp;${userAnswers[1]}<br><b>3:</b>&nbsp;${userAnswers[2]}<br><b>4:</b>&nbsp;${userAnswers[3]}<br><b>5:</b>&nbsp;${userAnswers[4]}<br><b>6:</b>&nbsp;${userAnswers[5]}<br><b>7:</b>&nbsp;${userAnswers[6]}<br><b>8:</b>&nbsp;${userAnswers[7]}<br><b>9:</b>&nbsp;${userAnswers[8]}<br><b>10:</b>&nbsp;${userAnswers[9]}<br><b>11:</b>&nbsp;${userAnswers[10]}<br><b>12:</b>&nbsp;${userAnswers[11]}<br><b>13:</b>&nbsp;${userAnswers[12]}<br><b>14:</b>&nbsp;${userAnswers[13]}<br><b>15:</b>&nbsp;${userAnswers[14]}<br>`;
    }
}   
setInterval(reloadData, 100);


let button__forOrg = document.getElementById('next_org');
button__forOrg.addEventListener("click", checkPass);


let h1_1 = document.getElementById('h1_1');
let h1_2 = document.getElementById('h1_2');

let slide_1  = document.getElementById('slide__1');
let slide_2  = document.getElementById('settings-org');


let slide__now = 1;

function checkPass() {
    if (true__pass == pass__value && slide__now == 1) {
        h1_1.style.display = "none";
        h1_2.style.display = "flex";
        pass.value = '';
        slide__now++;
        text__passIncorrect.style.display = "none"; 
        return
    } else {
        text__passIncorrect.style.display = "flex";
    }

    if (id == pass__value && slide__now == 2) {
        slide__now++;
        text__passIncorrect.style.display = "none";
        return
    } else {
        text__passIncorrect.style.display = "flex";
    }

    if (slide__now == 3) {
        slide_1.style.display = "none";
        slide_2.style.display = "flex";
    }
}




let button__largeFont = document.getElementById('largeFont');
button__largeFont.addEventListener("click", largeFontMore);
let button__smallFont = document.getElementById('smallFont');
button__smallFont.addEventListener("click", smallFontMore);
let button__returnFont = document.getElementById('returnFont');
button__returnFont.addEventListener("click", returnFont);

var questionNow = document.getElementById('questionNow');

let font_size = 16;

function largeFontMore() {
    font_size+=1;
    questionNow.style.fontSize = `${font_size}px`;
}

function smallFontMore() {
    font_size-=1;
    questionNow.style.fontSize = `${font_size}px`;
}

function returnFont() {
    font_size = 16;
    questionNow.style.fontSize = `${font_size}px`;
}





var question_number_now = 1;

var questions = [
    //1 (0)
    
    'В кодировке КОИ-8 каждый символ кодируется 8 битами. Андрей написал текст (в нём нет лишних пробелов): <br><br><div class="flex-center">«Обь, Лена, Волга, Москва, Макензи, Амазонка — реки». </div><br>Ученик вычеркнул из списка название одной из рек. Заодно он вычеркнул ставшие лишними запятые и пробелы — два пробела не должны идти подряд. <br>При этом размер нового предложения в данной кодировке оказался на 8 байтов меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название реки.<br><br><br><b>В ответ запишите только выбранное слово.</b>',
    
    // 2 (1-2-3-4-5-6)

    'Вася и Петя играли в шпионов и кодировали сообщения собственным шифром. Фрагмент кодовой таблицы приведён ниже',
    '<div class="table_row backgrey">Н</div><div class="table_row backgrey">М</div><div class="table_row backgrey">Л</div><div class="table_row backgrey">И</div><div class="table_row backgrey">Т</div><div class="table_row backgrey">О</div>',
    '<div class="table_row">~</div><div class="table_row">*</div><div class="table_row">*@</div><div class="table_row">@~*</div><div class="table_row">@*</div><div class="table_row">~*</div>',
    'Расшифруйте сообщение, если известно, что буквы в нём не повторяются:   ',
    '  <b>*@@~**~*~ </b>  ',
    'Запишите в ответе расшифрованное сообщение.<br><br><br><b>В ответ запишите только последовательность букв.</b>',

    //3 (7)

    'Напишите наименьшее целое число x, для которого истинно высказывание: \n\ <b>НЕ</b> (X < 9) <b>И НЕ</b> (X нечётное).<br><br><br><b>В ответ запишите только число.</b>',

    // 4 (8-9-10-11-12-13-14-15)

    'Между населёнными пунктами А, В, С, D, Е построены дороги, протяжённость которых (в километрах) приведена в таблице:',
    '<div class="table_row backgrey"></div><div class="table_row">A</div><div class="table_row">B</div><div class="table_row">C</div><div class="table_row">D</div><div class="table_row">E</div>',
    '<div class="table_row">A</div><div class="table_row backgrey"></div><div class="table_row">2</div><div class="table_row">6</div><div class="table_row">4</div><div class="table_row"></div>',
    '<div class="table_row">B</div><div class="table_row">2</div><div class="table_row backgrey"></div><div class="table_row">3</div><div class="table_row"></div><div class="table_row"></div>',
    '<div class="table_row">C</div><div class="table_row">6</div><div class="table_row">3</div><div class="table_row backgrey"></div><div class="table_row">3</div><div class="table_row">2</div>',
    '<div class="table_row">D</div><div class="table_row">4</div><div class="table_row"></div><div class="table_row">3</div><div class="table_row backgrey"></div><div class="table_row"></div>',
    '<div class="table_row">E</div><div class="table_row"></div><div class="table_row"></div><div class="table_row">2</div><div class="table_row"></div><div class="table_row backgrey"></div>',
    'Определите длину кратчайшего пути между пунктами А и E. Передвигаться можно только по дорогам, протяжённость которых указана в таблице.<br><br><br><b>В ответ запишите только число.</b>', 
    


    //5 (16)

    'У исполнителя Альфа две команды, которым присвоены номера:<br><b>1. прибавь 4;<br>2. раздели на b<br></b>(b — неизвестное натуральное число; b ≥ 2).<br>Выполняя первую из них, Альфа увеличивает число на экране на 4, а выполняя вторую, делит это число на b. Программа для исполнителя Альфа — это последовательность номеров команд. Известно, что программа 12111 переводит число 48 в число 16. Определите значение b.<br><br><br><b>В ответ запишите только число.</b>',

    //6 (17-18-19-20)

    'Ниже приведена программа, записанная на языке Pascal и Python.',
    '<div class="table_row backgrey">Python</div><div class="table_row backgrey">Pascal</div>',
    '<div class="table_row">s = int(input())<br>t = int(input())<br>if s < 7 or t > 5:<br>    print("YES")<br>else:<br>    print("NO")</div><div class="table_row">var s, t: integer;<br>begin<br>    readln(s);<br>    readln(t);<br>    if (s < 7) or (t > 5)<br>        then writeln("YES")<br>        else writeln("NO")<br>end.</div>',
    'Было проведено 9 запусков программы, при которых в качестве значений переменных s и t вводились следующие пары чисел:<br><br><div class="flex-center">(9, 5); (11, 2); (4, 5); (7, –2); (4, 4); (7, 7); (1, –1); (3, 9); (2, 2).</div><br>Сколько было запусков, при которых программа напечатала «NO»?<br><br><br><b>В ответ запишите только число.</b>',


    //7 (21)

    'Доступ к файлу <b>img.bmp</b>, находящемуся на сервере <b>pic.kz</b>, осуществляется по протоколу <b>http</b>. Фрагменты адреса файла закодированы буквами от А до Ж. Запишите последовательность этих букв, кодирующую адрес указанного файла в сети Интернет.<br><br>A) img<br>Б) /<br>B) kz<br>Г) ://<br>Д) http<br>Е) .bmp<br>Ж) pic.<br><br><br><b>В ответ запишите только последовательность букв.</b>',

    //8 (22-23-24-25-26-27)

    'В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для логической операции «И» — символ «&».<br>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.',
    '<div class="table_row backgrey"><b>Запрос</b></div><div class="table_row backgrey"><b>Найдено страниц(в тысячах)</b></div>',
    '<div class="table_row">Сириус & Вега</div><div class="table_row">260</div>',
    '<div class="table_row">Вега & (Сириус | Арктур)</div><div class="table_row">467</div>',
    '<div class="table_row">Сириус & Вега & Арктур</div><div class="table_row">119</div>',
    'Какое количество страниц (в тысячах) будет найдено по запросу Вега & Арктур ? Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.<br><br><br><b>В ответ запишите только число.</b>',

    //9 (28-29)

    'На рисунке — схема дорог, связывающих города А, Б, В, Г, Д, Е, Ж, К, Л, М, Н, П. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой.Сколько существует различных путей из города А в город П, проходящих через город Н?',
    '<br><br><div class="flex-center"><img src="assets/img/9.png" alt="Если у вас нет картинки, то обратитесь к организатору"></div><br><br><br><b>В ответ запишите только число.</b>',

    //10 (30)

    'Среди приведённых ниже трёх чисел, записанных в различных системах счисления, найдите минимальное и запишите его в ответе в десятичной системе счисления. В ответе запишите только число, основание системы счисления указывать не нужно.<br><br><div class="flex-center">67<sub>16</sub>, 150<sub>8</sub>, 1101000<sub>2</sub>.</div><br><br><br><b>В ответ запишите только число.</b>',

    //11 (31)

    'В одном из произведений А. П. Чехова, текст которого приведён в каталоге Чехов, присутствует персонаж с фамилией Рагин. С помощью поисковых средств операционной системы и текстового редактора выясните профессию этого персонажа.<br>Выполните задание, распаковав архив на своём компьютере.<br><div class="flex-center"><a href="" title="Нажмите, чтобы открыть архив с заданием">Чехов.rar</a></div><br><br><br><b>В ответ запишите только число.</b>',

    //12 (32)

    'Сколько файлов с расширением .odt содержится в подкаталогах каталога <b>DEMO-12</b>? В ответе укажите только число.<br> Выполните задание, распаковав архив на своём компьютере.<br><div class="flex-center"><a href="" title="Нажмите, чтобы открыть архив с заданием">DEMO-12.rar</a></div><br><br><br><b>В ответ запишите только число.</b>',

    //13 (33)

    'Выберите какое задание вы будете выполнять(вы всегда можете изменить свой выбор)<br><br><b>13.1</b><br> Используя информацию и иллюстративный материал, содержащийся в каталоге «Жираф», создайте презентацию из трёх слайдов на тему «Жираф». В презентации должны содержаться краткие иллюстрированные сведения о внешнем виде, об ареале обитания, образе жизни и рационе жирафов. Все слайды должны быть выполнены в едином стиле, каждый слайд должен быть озаглавлен(полные условия оформления презентации смотрите в приложенном архиве).<br><br><div class="flex-center"><a href="" title="Нажмите, чтобы скачать архив с заданием">Жираф.rar</a></div><br><b>13.2</b><br> Создайте в текстовом редакторе документ и напишите в нём следующий текст, точно воспроизведя всё оформление текста, имеющееся в образце.Данный текст должен быть написан шрифтом размером 14 пунктов. Основной текст выровнен по ширине, и первая строка абзаца имеет отступ в 1 см. В тексте есть слова, выделенные жирным шрифтом, курсивом и подчеркиванием.При этом допустимо, чтобы ширина Вашего текста отличалась от ширины текста в примере, поскольку ширина текста зависит от размера страницы и полей. В этом случае разбиение текста на строки должно соответствовать стандартной ширине абзаца.<br><br><div class="flex-center"><img src="assets/img/13.2.png" alt="Если у вас нет картинки, то обратитесь к организатору"></div><br><br><br><b>Загрузите ниже файл под именем задания.</b>',
    
    //14 (34-35-36-37-38-39-40-41)

    'В электронную таблицу занесли численность населения городов разных стран. Ниже приведены первые пять строк таблицы:',
    '<div class="table_row backgrey"><b></b></div><div class="table_row backgrey"><b>A</b></div><div class="table_row backgrey"><b>B</b></div><div class="table_row backgrey"><b>C</b></div>',
    '<div class="table_row">1</div><div class="table_row">Город</div><div class="table_row">Численность населения</div><div class="table_row">Страна</div>',
    '<div class="table_row">2</div><div class="table_row">Асмун</div><div class="table_row">91,40</div><div class="table_row">Египет</div>',
    '<div class="table_row">3</div><div class="table_row">Винер-Нойштадт</div><div class="table_row">39,94</div><div class="table_row">Австрия</div>',
    '<div class="table_row">4</div><div class="table_row">Люлебургаз</div><div class="table_row">100,79</div><div class="table_row">Турция</div>',
    '<div class="table_row">5</div><div class="table_row">Фёклабрук</div><div class="table_row">11,95</div><div class="table_row">Австрия</div>',
    'В столбце А указано название города; в столбце В — численность населения (тыс. чел.); в столбце С — название страны. Всего в электронную таблицу были занесены данные по 1000 городам. Порядок записей в таблице произвольный. <br><br><b>Выполните задание.</b><br>Откройте файл с данной электронной таблицей. На основании данных, содержащихся в этой таблице, ответьте на два вопроса.<br>1. Сколько городов, представленных в таблице, имеют численность населения менее 100 тыс. человек? Ответ запишите в ячейку F2.<br>2. Чему равна средняя численность населения австрийских городов, представленных в таблице? Ответ на этот вопрос с точностью не менее двух знаков после запятой (в тыс. чел.) запишите в ячейку F3 таблицы.<br>3. Постройте круговую диаграмму, отображающую соотношение числа городов из стран «Египет», «Австрия» и «Россия». Левый верхний угол диаграммы разместите вблизи ячейки G6.<br><br><div class="flex-center"><a href="" title="Нажмите, чтобы скачать архив с заданием">task-14.rar</a></div><br><br><br><b>Загрузите ниже файл под именем задания, которое вы выбрали.</b>',

    //15 (42)

    'Выберите какое задание вы будете выполнять(вы всегда можете изменить свой выбор)<br><br><div class="flex-center"><img src="assets/img/15.1.png" alt="Если у вас нет картинки, то обратитесь к организатору"></div><br><br><div class="flex-center"><img src="assets/img/15.2.png" alt="Если у вас нет картинки, то обратитесь к организатору"></div><br><br><br><b>Загрузите ниже файл под именем задания, которое вы выбрали.</b>',

]





let button__prev = document.getElementById('prev-ques');
button__prev.addEventListener("click", prevQues);
let button__next = document.getElementById('next-ques');
button__next.addEventListener("click", nextQues);
let text__quesNum = document.getElementById('quest-num');
let text__partNum = document.getElementById('part-num');
let text__quesCorrect = document.getElementById('questionNow');

var ans__boxInput = document.getElementById('answer__boxInput');
var ans__boxFile = document.getElementById('answer__boxFile');


var correctQuestion = '';

//for test
//console.log(question_number_now = 12)

window.onload = function() {
    text__quesCorrect.innerHTML = `${questions[0]}`
}

function prevQues() {
    if ((userAns.value != '' || userFile.value != '') && userAnswerIsWas[question_number_now-1] == false) {
        let choose = confirm('Вы не сохранили ответ на вопрос!\nВы уверены, что хотите перейти к следующему вопросу, ваш ответ не сохранится?');
        if (choose) {
            if (question_number_now > 1) {
                question_number_now--;
                text__quesNum.innerHTML = `${question_number_now} задание`;

                userAns.value = '';
                userFile.value = '';


                if (question_number_now == 1) {
                    correctQuestion = `${questions[0]}`;
                }
                if (question_number_now == 2) {
                    correctQuestion = `${questions[1]}<br><br><div class="flex-center"><div class="table">${questions[2]}${questions[3]}</div></div><br>${questions[4]}${questions[5]}<br>${questions[6]}`;
                }
                if (question_number_now == 3) {
                    correctQuestion = `${questions[7]}`;
                }
                if (question_number_now == 4) {
                    correctQuestion = `${questions[8]}<br><br><div class="flex-center"><div class="table">${questions[9]}${questions[10]}${questions[11]}${questions[12]}${questions[13]}${questions[14]}</div></div><br>${questions[15]}`;
                }
                if (question_number_now == 5) {
                    correctQuestion = `${questions[16]}`;
                }
                if (question_number_now == 6) {
                correctQuestion = `${questions[17]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[18]}${questions[19]}</div></div><br>${questions[20]}`;
                }
                if (question_number_now == 7) {
                    correctQuestion = `${questions[21]}`;
                }
                if (question_number_now == 8) {
                    correctQuestion = `${questions[22]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[23]}${questions[24]}${questions[25]}${questions[26]}</div></div><br>${questions[27]}`;
                }
                if (question_number_now == 9) {
                    correctQuestion = `${questions[28]}${questions[29]}`;
                }
                if (question_number_now == 10) {
                    correctQuestion = `${questions[30]}`;
                }
                if (question_number_now == 11) {
                    correctQuestion = `${questions[31]}`;
                }
                if (question_number_now == 12) {
                    correctQuestion = `${questions[32]}`;
                }
                if (question_number_now == 13) {
                    correctQuestion = `${questions[33]}`;
                }
                if (question_number_now == 14) {
                    correctQuestion = `${questions[34]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(4, 1fr);">${questions[35]}${questions[36]}${questions[37]}${questions[38]}${questions[39]}${questions[40]}</div></div><br>${questions[41]}`;
                }
                if (question_number_now == 15) {
                    correctQuestion = `${questions[42]}`;
                }
                text__quesCorrect.innerHTML = `${correctQuestion}`;


                //console.log(question_number_now);
            } 

            if (question_number_now < 11) {
                text__partNum.innerHTML = `1 часть`;
            } else {
                text__partNum.innerHTML = `2 часть`;
            }   
        } 
    } else {
        if (question_number_now > 1) {
            question_number_now--;
            text__quesNum.innerHTML = `${question_number_now} задание`;

            userAns.value = '';
            userFile.value = '';


            if (question_number_now == 1) {
                correctQuestion = `${questions[0]}`;
            }
            if (question_number_now == 2) {
                correctQuestion = `${questions[1]}<br><br><div class="flex-center"><div class="table">${questions[2]}${questions[3]}</div></div><br>${questions[4]}${questions[5]}<br>${questions[6]}`;
            }
            if (question_number_now == 3) {
                correctQuestion = `${questions[7]}`;
            }
            if (question_number_now == 4) {
                correctQuestion = `${questions[8]}<br><br><div class="flex-center"><div class="table">${questions[9]}${questions[10]}${questions[11]}${questions[12]}${questions[13]}${questions[14]}</div></div><br>${questions[15]}`;
            }
            if (question_number_now == 5) {
                correctQuestion = `${questions[16]}`;
            }
            if (question_number_now == 6) {
            correctQuestion = `${questions[17]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[18]}${questions[19]}</div></div><br>${questions[20]}`;
            }
            if (question_number_now == 7) {
                correctQuestion = `${questions[21]}`;
            }
            if (question_number_now == 8) {
                correctQuestion = `${questions[22]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[23]}${questions[24]}${questions[25]}${questions[26]}</div></div><br>${questions[27]}`;
            }
            if (question_number_now == 9) {
                correctQuestion = `${questions[28]}${questions[29]}`;
            }
            if (question_number_now == 10) {
                correctQuestion = `${questions[30]}`;
            }
            if (question_number_now == 11) {
                correctQuestion = `${questions[31]}`;
            }
            if (question_number_now == 12) {
                correctQuestion = `${questions[32]}`;
            }
            if (question_number_now == 13) {
                correctQuestion = `${questions[33]}`;
            }
            if (question_number_now == 14) {
                correctQuestion = `${questions[34]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(4, 1fr);">${questions[35]}${questions[36]}${questions[37]}${questions[38]}${questions[39]}${questions[40]}</div></div><br>${questions[41]}`;
            }
            if (question_number_now == 15) {
                correctQuestion = `${questions[42]}`;
            }
            text__quesCorrect.innerHTML = `${correctQuestion}`;


            //console.log(question_number_now);
        } 
        if (question_number_now < 11) {
            text__partNum.innerHTML = `1 часть`;
        } else {
            text__partNum.innerHTML = `2 часть`;
        }       
    }
}

function nextQues() {
    if ((userAns.value != '' || userFile.value != '') && userAnswerIsWas[question_number_now-1] == false) {
        let choose = confirm('Вы не сохранили ответ на вопрос!\nВы уверены, что хотите перейти к следующему вопросу, ваш ответ не сохранится?');
        if (choose) {
            if (question_number_now < 15) {
                question_number_now++;
                text__quesNum.innerHTML = `${question_number_now} задание`;

                userAns.value = '';
                userFile.value = '';


                if (question_number_now == 1) {
                    correctQuestion = `${questions[0]}`;
                }
                if (question_number_now == 2) {
                    correctQuestion = `${questions[1]}<br><br><div class="flex-center"><div class="table">${questions[2]}${questions[3]}</div></div><br>${questions[4]}${questions[5]}<br>${questions[6]}`;
                }
                if (question_number_now == 3) {
                    correctQuestion = `${questions[7]}`;
                }
                if (question_number_now == 4) {
                    correctQuestion = `${questions[8]}<br><br><div class="flex-center"><div class="table">${questions[9]}${questions[10]}${questions[11]}${questions[12]}${questions[13]}${questions[14]}</div></div><br>${questions[15]}`;
                }
                if (question_number_now == 5) {
                    correctQuestion = `${questions[16]}`;
                }
                if (question_number_now == 6) {
                correctQuestion = `${questions[17]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[18]}${questions[19]}</div></div><br>${questions[20]}`;
                }
                if (question_number_now == 7) {
                    correctQuestion = `${questions[21]}`;
                }
                if (question_number_now == 8) {
                    correctQuestion = `${questions[22]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[23]}${questions[24]}${questions[25]}${questions[26]}</div></div><br>${questions[27]}`;
                }
                if (question_number_now == 9) {
                    correctQuestion = `${questions[28]}${questions[29]}`;
                }
                if (question_number_now == 10) {
                    correctQuestion = `${questions[30]}`;
                }
                if (question_number_now == 11) {
                    correctQuestion = `${questions[31]}`;
                }
                if (question_number_now == 12) {
                    correctQuestion = `${questions[32]}`;
                }
                if (question_number_now == 13) {
                    correctQuestion = `${questions[33]}`;
                }
                if (question_number_now == 14) {
                    correctQuestion = `${questions[34]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(4, 1fr);">${questions[35]}${questions[36]}${questions[37]}${questions[38]}${questions[39]}${questions[40]}</div></div><br>${questions[41]}`;
                }
                if (question_number_now == 15) {
                    correctQuestion = `${questions[42]}`;
                }
                text__quesCorrect.innerHTML = `${correctQuestion}`;


                //console.log(question_number_now);
            } 

            if (question_number_now < 11) {
                text__partNum.innerHTML = `1 часть`;
            } else {
                text__partNum.innerHTML = `2 часть`;
            }   
        } 
    } else {
        if (question_number_now < 15) {
            question_number_now++;
            text__quesNum.innerHTML = `${question_number_now} задание`;

            userAns.value = '';
            userFile.value = '';


            if (question_number_now == 1) {
                correctQuestion = `${questions[0]}`;
            }
            if (question_number_now == 2) {
                correctQuestion = `${questions[1]}<br><br><div class="flex-center"><div class="table">${questions[2]}${questions[3]}</div></div><br>${questions[4]}${questions[5]}<br>${questions[6]}`;
            }
            if (question_number_now == 3) {
                correctQuestion = `${questions[7]}`;
            }
            if (question_number_now == 4) {
                correctQuestion = `${questions[8]}<br><br><div class="flex-center"><div class="table">${questions[9]}${questions[10]}${questions[11]}${questions[12]}${questions[13]}${questions[14]}</div></div><br>${questions[15]}`;
            }
            if (question_number_now == 5) {
                correctQuestion = `${questions[16]}`;
            }
            if (question_number_now == 6) {
            correctQuestion = `${questions[17]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[18]}${questions[19]}</div></div><br>${questions[20]}`;
            }
            if (question_number_now == 7) {
                correctQuestion = `${questions[21]}`;
            }
            if (question_number_now == 8) {
                correctQuestion = `${questions[22]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[23]}${questions[24]}${questions[25]}${questions[26]}</div></div><br>${questions[27]}`;
            }
            if (question_number_now == 9) {
                correctQuestion = `${questions[28]}${questions[29]}`;
            }
            if (question_number_now == 10) {
                correctQuestion = `${questions[30]}`;
            }
            if (question_number_now == 11) {
                correctQuestion = `${questions[31]}`;
            }
            if (question_number_now == 12) {
                correctQuestion = `${questions[32]}`;
            }
            if (question_number_now == 13) {
                correctQuestion = `${questions[33]}`;
            }
            if (question_number_now == 14) {
                correctQuestion = `${questions[34]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(4, 1fr);">${questions[35]}${questions[36]}${questions[37]}${questions[38]}${questions[39]}${questions[40]}</div></div><br>${questions[41]}`;
            }
            if (question_number_now == 15) {
                correctQuestion = `${questions[42]}`;
            }
            text__quesCorrect.innerHTML = `${correctQuestion}`;


            //console.log(question_number_now);
        } 
        if (question_number_now < 11) {
            text__partNum.innerHTML = `1 часть`;
        } else {
            text__partNum.innerHTML = `2 часть`;
        }       
    }
}




function goToQues(el) {
    if ((userAns.value != '' || userFile.value != '') && userAnswerIsWas[question_number_now-1] == false) {
        let choose = confirm('Вы не сохранили ответ на вопрос!\nВы уверены, что хотите перейти к следующему вопросу, ваш ответ не сохранится?');
        if (choose) {
            if (el > 0 && el < 16) {
                text__quesNum.innerHTML = `${el} задание`;
                question_number_now = el;
    
                userAns.value = '';
                userFile.value = '';
    
                
                if (question_number_now < 11) {
                    text__partNum.innerHTML = `1 часть`;
                } else {
                    text__partNum.innerHTML = `2 часть`;
                }
    
                if (el == 1) {
                    correctQuestion = `${questions[0]}`;
                }
                if (el == 2) {
                    correctQuestion = `${questions[1]}<br><br><div class="flex-center"><div class="table">${questions[2]}${questions[3]}</div></div><br>${questions[4]}${questions[5]}<br>${questions[6]}`;
                }
                if (el == 3) {
                    correctQuestion = `${questions[7]}`;
                }
                if (el == 4) {
                    correctQuestion = `${questions[8]}<br><br><div class="flex-center"><div class="table">${questions[9]}${questions[10]}${questions[11]}${questions[12]}${questions[13]}${questions[14]}</div></div><br>${questions[15]}`;
                }
                if (el == 5) {
                    correctQuestion = `${questions[16]}`;
                }
                if (el == 6) {
                    correctQuestion = `${questions[17]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[18]}${questions[19]}</div></div><br>${questions[20]}`;
                }
                if (el == 7) {
                    correctQuestion = `${questions[21]}`;
                }
                if (el == 8) {
                    correctQuestion = `${questions[22]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[23]}${questions[24]}${questions[25]}${questions[26]}</div></div><br>${questions[27]}`;
                }
                if (el == 9) {
                    correctQuestion = `${questions[28]}${questions[29]}`;
                }
                if (el == 10) {
                    correctQuestion = `${questions[30]}`;
                }
                if (el == 11) {
                    correctQuestion = `${questions[31]}`;
                }
                if (el == 12) {
                    correctQuestion = `${questions[32]}`;
                }
                if (el == 13) {
                    correctQuestion = `${questions[33]}`;
                }
                if (el == 14) {
                    correctQuestion = `${questions[34]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(4, 1fr);">${questions[35]}${questions[36]}${questions[37]}${questions[38]}${questions[39]}${questions[40]}</div></div><br>${questions[41]}`;
                }
                if (el == 15) {
                    correctQuestion = `${questions[42]}`;
                }
                text__quesCorrect.innerHTML = `${correctQuestion}`;
            } else {
                console.warn('Задание не найдено(вызов функции goToQues)')
            }
        }
    } else {
        if (el > 0 && el < 16) {
            text__quesNum.innerHTML = `${el} задание`;
            question_number_now = el;

            userAns.value = '';
            userFile.value = '';

            
            if (question_number_now < 11) {
                text__partNum.innerHTML = `1 часть`;
            } else {
                text__partNum.innerHTML = `2 часть`;
            }

            if (el == 1) {
                correctQuestion = `${questions[0]}`;
            }
            if (el == 2) {
                correctQuestion = `${questions[1]}<br><br><div class="flex-center"><div class="table">${questions[2]}${questions[3]}</div></div><br>${questions[4]}${questions[5]}<br>${questions[6]}`;
            }
            if (el == 3) {
                correctQuestion = `${questions[7]}`;
            }
            if (el == 4) {
                correctQuestion = `${questions[8]}<br><br><div class="flex-center"><div class="table">${questions[9]}${questions[10]}${questions[11]}${questions[12]}${questions[13]}${questions[14]}</div></div><br>${questions[15]}`;
            }
            if (el == 5) {
                correctQuestion = `${questions[16]}`;
            }
            if (el == 6) {
                correctQuestion = `${questions[17]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[18]}${questions[19]}</div></div><br>${questions[20]}`;
            }
            if (el == 7) {
                correctQuestion = `${questions[21]}`;
            }
            if (el == 8) {
                correctQuestion = `${questions[22]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(2, 1fr);">${questions[23]}${questions[24]}${questions[25]}${questions[26]}</div></div><br>${questions[27]}`;
            }
            if (el == 9) {
                correctQuestion = `${questions[28]}${questions[29]}`;
            }
            if (el == 10) {
                correctQuestion = `${questions[30]}`;
            }
            if (el == 11) {
                correctQuestion = `${questions[31]}`;
            }
            if (el == 12) {
                correctQuestion = `${questions[32]}`;
            }
            if (el == 13) {
                correctQuestion = `${questions[33]}`;
            }
            if (el == 14) {
                correctQuestion = `${questions[34]}<br><br><div class="flex-center"><div class="table" style="grid-template-columns: repeat(4, 1fr);">${questions[35]}${questions[36]}${questions[37]}${questions[38]}${questions[39]}${questions[40]}</div></div><br>${questions[41]}`;
            }
            if (el == 15) {
                correctQuestion = `${questions[42]}`;
            }
            text__quesCorrect.innerHTML = `${correctQuestion}`;
        } else {
            console.warn('Задание не найдено(вызов функции goToQues)')
        }
    }
}



var trueAnswers = [
    'Москва',
    'ЛИМОН',
    '10',
    '7',
    '13',
    '3',
    'ДГЖВБАЕ',
    '326',
    'окей', //хз
    '103',
    '3', //хз
    '', //хз
]

var userAnswers = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]

var userAnswerIsWas = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
]


var userAns = document.getElementById('userAns');
var userAns__value = userAns.value;
let status__ques = document.getElementById('status');

let button__save = document.getElementById('save');
button__save.addEventListener("click", toAnswer);

var howmuchanswers = 0;




function toAnswer() {
    if (userAns__value != '') {
        userAnswers[question_number_now-1] = userAns__value;
        userAnswerIsWas[question_number_now-1] = true;
        howmuchanswers++;
        status__ques.innerHTML = `ответ сохранен`;
        status__ques.style.color = `#008000`;
    }
}



let button__saveFile = document.getElementById('load');
button__saveFile.addEventListener("click", toAnswerFile);
let status__file = document.getElementById('status__file');
let userFile = document.getElementById('userFile');
var userFile__value = userFile.value;


function toAnswerFile() {
    if (userFile.value != '') {
        userAnswers[question_number_now-1] = userFile__value;
        userAnswerIsWas[question_number_now-1] = true;
        howmuchanswers++;
        status__file.innerHTML = `ответ сохранен`;
        status__file.style.color = `#008000`;
    }
}




let button__end = document.getElementById('end');
button__end.addEventListener("click", popupToggle__2);
let window__end = document.getElementById('end__window');
let button__close2 = document.getElementById('popup__close2');
button__close2.addEventListener("click", popupToggle__2)

let over__end = document.getElementById('endTest');
over__end.addEventListener("click", endTest);

function endTest() {
    over__step1.style.display = 'none'; 
    over__step2.style.display = 'flex';
}


let popup__is__open2 = false;
function popupToggle__2() {
    if (popup__is__open2 == false) {
        window__end.style.display = "flex";
        popup__is__open2 = true;
        return
    }
    if (popup__is__open2 == true) {
        window__end.style.display = "none";
        popup__is__open2 = false;
    }
}



let button__checkOver = document.getElementById('check__over');
button__checkOver.addEventListener("click", nextStepOver1);
let over__step1 = document.getElementById('end__step1');
let over__step2 = document.getElementById('end__step2');
let over__step3 = document.getElementById('end__step3');
let over__code = document.getElementById('code__over');
let id__code = document.getElementById('id__over');
let pass__incorrentOver = document.getElementById('pass__incorrentOver');
let button__close3 = document.getElementById('popup__close2');
button__close3.addEventListener("click", popup__close3);

function nextStepOver1() {
    if (over__code.value == true__pass && id__code.value == id) {
        over__step2.style.display = 'none'; 
        over__step3.style.display = 'flex';
    } else {
        pass__incorrentOver.style.display = 'flex';
    }
}


function popup__close3() {
    over__code.value = '';
    id__code.value = '';
    over__step1.style.display = 'flex'; 
    over__step2.style.display = 'none';
    over__step3.style.display = 'none'; 
}


let button__overTest = document.getElementById('over__overButton');
button__overTest.addEventListener("click", checkResults);

let input__ready = document.getElementById('PupleIsReady');
let input__delete = document.getElementById('PupleIsDelete');

let text__warnPupil = document.getElementById('pupilNotReady');

function checkResults() {
    if (input__ready.checked == true) {
        header.style.display = 'none';
        main.style.display = 'none';
        window__end.style.display = 'none';
        end__work.style.display = 'flex';
    } else {
        text__warnPupil.style.display = 'flex';
    }
}



let button__blankGet = document.getElementById('blank__get');
button__blankGet.addEventListener("click", getBlank);
let input__blankValue = document.getElementById('input__blankValue');
let text__blankmuch = document.getElementById('howmuch-lists');
var header = document.getElementById('header')
var main = document.getElementById('main');
var end__work = document.getElementById('end-work');

function getBlank() {
    if (input__blankValue.value == blank__id) {
        blank__howmuch++;
        text__blankHowMuch.innerHTML = `&nbsp;${blank__howmuch} бланка(-ов)`;
        text__blankmuch.innerHTML = `&nbsp;${blank__howmuch}`;
    }
}