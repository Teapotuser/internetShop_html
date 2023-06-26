var register_checkbox = document.querySelector("#create-account"); //checkbox "Зарегистрировать аккаунт"
var password_fields = document.querySelectorAll(".password");

var address_inputs = document.querySelectorAll(".delivery-address");
var delivery_radios = document.querySelectorAll('input[type=radio][name="delivery-method"]');
// var delivery_radio_post = document.querySelector("#post");

//Отобразить поля пароля если выбран checkbox "Зарегистрировать аккаунт"
register_checkbox.addEventListener('change', e => {
    if (register_checkbox.checked) {
        password_fields.forEach(password_field => {
            password_field.classList.remove('hidden');
            password_field.required = true;
        });
    }
    else{
        password_fields.forEach(password_field => {
            password_field.classList.add('hidden');
            password_field.required = false;
        });
    };
});

//Отобразить поля адреса если выбран способ доставки "Адресная доставка" radiobutton
delivery_radios.forEach(delivery_radio => delivery_radio.addEventListener('change', e => {
    if (delivery_radio.value === "post") {
        address_inputs.forEach(address_input => address_input.classList.remove('hidden'));
    }
    else{
        address_inputs.forEach(address_input => address_input.classList.add('hidden'));
        // delivery_radio_post.style.marginBottom = "0px";
    };
}));    