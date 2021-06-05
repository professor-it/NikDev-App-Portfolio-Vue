<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1838617684:AAHQhmPo2WF0hu8O4n1wzz7o6LdftGJ11W0";

//Сюда вставляем chat_id
$chat_id = "359150987";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['username']);
    $email = ($_POST['useremail']);
    $theme = ($_POST['theme']);
    $text = ($_POST['text']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'E-mail:' => $email,
        'Тематика:' => $theme,
        'Сообщение:' => $text
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}

?>