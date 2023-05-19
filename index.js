console.log(screen.orientation.type);
        console.log(window.innerWidth);
        if (screen.orientation.type === "landscape-primary" && window.innerWidth <= 812) {
            console.log(true);
            document.querySelector('#changingValue').value = '+7 (ХХХ) ХХХ-ХХ-ХХ';
        }