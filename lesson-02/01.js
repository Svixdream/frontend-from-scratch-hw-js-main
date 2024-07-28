/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false // статус администратора
const isVerifiedUser = true // подтверждённый юзер
const hasSpecialPermission = true // спец. разрешение
const hasTemporaryPass = false // временное разрешение

// Определяем, может ли пользователь получить доступ
let isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)
// Проверяет, является ли пользователь администратором (isAdmin) или подтверждённым пользователем (isVerifiedUser). Если хотя бы одно из этих условий истинно, то выражение (isAdmin || isVerifiedUser) будет истинным

// Проверяет, имеет ли пользователь специальное разрешение (hasSpecialPermission) или временный пропуск (hasTemporaryPass). Если хотя бы одно из этих условий истинно, то выражение (hasSpecialPermission || hasTemporaryPass) будет истинным

// your code

switch (isAccess) {
    case true:
        alert("Пользователь вошел в систему."); // Если значение isAccess равно true, выполняется первый блок case true, который выводит "Пользователь вошел в систему."
        break;
    case false:
        alert("Пользователь не вошел в систему."); // Если значение isAccess равно false, выполняется второй блок case false, который выводит "Пользователь не вошел в систему."
        
}