let firstNameId;
    let firstNameEl;
    let LastNameId;
    let LastNameEl;
    let addressId;
    let addressEl;
    let citiesId;
    let citiesEl;
    let hobbiesId;
    let hobbiesEl;
    // можно короче писать создавать переменную и сразу ее инициализировать (присвоить Id)
    // НО ВАЖНО сначала объявить переменную Id и только потом ее использовать!
    let avatarContainerId = 'ava';
    // то же касается и  другой переменной (итого 2 строчки вместо 4х)
    let avatarContainerEl = document.getElementById(avatarContainerId);
    let avatarId = 'avatar';
    let avatarEl = document.getElementById(avatarId);

    function alertValue() {
        window.alert(listEl.innerHTML);
    }

    function logValue() {
        console.log(listEl.innerHTML);
        console.log(firstNameEl.value);
    }

    firstNameId = 'first-name';
    LastNameId = 'last-name';
    addressId = 'address';
    citiesId = 'cities'
    hobbiesId = 'hobbies';

    firstNameEl = document.getElementById(firstNameId);
    LastNameEl = document.getElementById(LastNameId);
    addressEl = document.getElementById(addressId);
    citiesEl = document.getElementById(citiesId);
    hobbiesEl = document.getElementById(hobbiesId);

    // переприсвоили значение в input!
    firstNameEl.value = 'Ak74'
    // value не поменялось, но можно поменять его другим способом:
    firstNameEl.setAttribute('value', 'Ak74');
    // firstNameEl.className = 'newClass';
    LastNameEl.value = 'gp25';
    // window.alert(firstNameEl.className);

    LastNameEl.className = 'lastName-input nextClass1 errorInput';
    avatarEl.src = '/Users/stanislav/desktop/itkamasutra/js.png';
    // всойство пи котором при долгом наведении курсора на  объект высвечивается текст, помещенный в title
    avatarEl.title = 'I am avatar';
    LastNameEl.title = 'Enter last name';
    citiesEl.value = 'Budva';
    hobbiesEl.value = 'CSS';
    avatarContainerEl.innerHTML = '<ul id=\'list\'><li>1</li><li>2</li></ul>';

    let listId = 'list';
    let listEl = document.getElementById(listId);
    // можно написать короче 
    // let list = document.getElementById('list');
    // window.alert(listEl.innerHTML);

    alertValue();
    logValue();

