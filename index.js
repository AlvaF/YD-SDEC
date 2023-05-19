// Отслеживание альбомной ориентации у мобильных телефонов, изменение значения placeholder
if (screen.orientation.type === "landscape-primary" && window.innerWidth <= 813 || window.innerWidth <= 380) {
    document.querySelector('#changingValue').placeholder = '+7 (ХХХ) ХХХ-ХХ-ХХ';
    document.querySelector('.input-value').classList.remove('none');
}