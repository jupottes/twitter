window.onload = tweet();

function tweet() {
    var button = document.getElementsByTagName('button')[0];
    var tweetText = document.getElementsByTagName('textarea')[0];
    var message = tweetText.value;

    tweetText.addEventListener('input', countCharacters);
    tweetText.addEventListener('input', addTextAreaRows);
    button.addEventListener('click', addMessageToFeed);
}

function countCharacters() {
    var button = document.getElementsByTagName('button')[0];
    var message = document.getElementsByTagName('textarea')[0].value;
    var leftCharacters = 140 - message.length;
    var counter = document.getElementById('counter');
    counter.innerHTML = leftCharacters;

    if (message.length > 0 && message.trim() !== '' && message.length <= 140) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }

    if (leftCharacters < 10) {
        counter.setAttribute('class', 'color3');
    } else if (leftCharacters < 20) {
        counter.setAttribute('class', 'color2');
    } else {
        counter.setAttribute('class', 'color1');
    }
}

function addTextAreaRows() {
    var tweetText = document.getElementsByTagName('textarea')[0];
    tweetText.style.height = '45px';
    tweetText.style.height = tweetText.scrollHeight + 'px';
}

function addMessageToFeed() {
    var tweetText = document.getElementsByTagName('textarea')[0];
    var message = tweetText.value;

    var tweetMessage = document.createElement('p');
    tweetMessage.className = 'message';
    tweetMessage.textContent = message;

    var dateInfo = addDate();

    var name = document.createElement('span');
    name.setAttribute('class', 'name-feed');
    name.textContent = 'Ju Pottes';

    var username = document.createElement('span');
    username.setAttribute('class', 'username-feed');
    username.textContent = '@JuPottes';

    var avatar = document.createElement('img');
    avatar.setAttribute('class', 'avatar-feed');
    avatar.setAttribute('src', 'ju.jpeg');

    var tweetBox = document.createElement('div');
    tweetBox.className = 'tweet';

    tweetBox.appendChild(tweetMessage);
    tweetBox.insertBefore(dateInfo, tweetMessage);
    tweetBox.insertBefore(username, dateInfo);
    tweetBox.insertBefore(name, username);
    tweetBox.insertBefore(avatar, name);

    var feedDiv = document.getElementsByClassName('feed')[0];
    feedDiv.insertBefore(tweetBox, feedDiv.firstChild);

    event.preventDefault();
    tweetText.value = '';
    document.getElementById('counter').innerHTML = 140;
    counter.setAttribute('class', 'blue');
    document.getElementsByTagName('button')[0].disabled = true;
    tweetText.style.height = '45px';
}

function addDate() {
    var d = new Date();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var date = d.getDate();
    var month = d.getMonth();
    var monthAsText = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    var year = d.getFullYear();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    var dateInfo = document.createElement('span');
    dateInfo.setAttribute('class', 'date');
    dateInfo.textContent = hour + ':' + minutes + ' - ' + date + ' de ' + monthAsText[month] + ' de ' + year;

    return dateInfo;
}