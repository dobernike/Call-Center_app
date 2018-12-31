var buttonContract = document.getElementById("button-search");
var searchDiv = document.getElementsByClassName('info-user-search-div')[0];
var buttonNew = document.getElementById("button-new");
var newAddDiv = document.getElementsByClassName('registration-new-user')[0];

buttonContract.onclick = function () {
    hideShow(searchDiv, newAddDiv);
};

buttonNew.onclick = function () {
    hideShow(newAddDiv, searchDiv);

};

var buttonBack = document.getElementsByClassName('button-back')[0];
var infoList = document.getElementsByClassName('info-firm-list')[0];
var infoPageList = document.getElementsByClassName('info-firm-inner-list')[0];

// ИЗМЕНИТЬ! ПРОСТИТЕ, НО ОСТАВАЛОСЬ 5 мин до конца раб дня 31.12.2018 :(
var info1 = document.getElementById('info-1');
var infoPage1 = document.getElementsByClassName('info-firm-inner-1')[0];
var info2 = document.getElementById('info-2');
var infoPage2 = document.getElementsByClassName('info-firm-inner-2')[0];
var info3 = document.getElementById('info-3');
var infoPage3 = document.getElementsByClassName('info-firm-inner-3')[0];
var info4 = document.getElementById('info-4');
var infoPage4 = document.getElementsByClassName('info-firm-inner-4')[0];
var info5 = document.getElementById('info-5');
var infoPage5 = document.getElementsByClassName('info-firm-inner-5')[0];
var info6 = document.getElementById('info-6');
var infoPage6 = document.getElementsByClassName('info-firm-inner-6')[0];
var info7 = document.getElementById('info-7');
var infoPage7 = document.getElementsByClassName('info-firm-inner-7')[0];
var info8 = document.getElementById('info-8');
var infoPage8 = document.getElementsByClassName('info-firm-inner-8')[0];
var info9 = document.getElementById('info-9');
var infoPage9 = document.getElementsByClassName('info-firm-inner-9')[0];
var info10 = document.getElementById('info-10');
var infoPage10 = document.getElementsByClassName('info-firm-inner-10')[0];
var info11 = document.getElementById('info-11');
var infoPage11 = document.getElementsByClassName('info-firm-inner-11')[0];
// console.log(infoPage1)

info1.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage1.classList.remove('hidden');
};

if (infoPage1.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage1.classList.add('hidden');
    };
}

info2.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage2.classList.remove('hidden');
};

if (infoPage2.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage2.classList.add('hidden');
    };
}
info3.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage3.classList.remove('hidden');
};

if (infoPage3.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage3.classList.add('hidden');
    };
}
info4.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage4.classList.remove('hidden');
};

if (infoPage4.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage4.classList.add('hidden');
    };
}
info5.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage5.classList.remove('hidden');
};

if (infoPage5.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage5.classList.add('hidden');
    };
}
info6.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage6.classList.remove('hidden');
};

if (infoPage6.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage6.classList.add('hidden');
    };
}
info7.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage7.classList.remove('hidden');
};

if (infoPage7.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage7.classList.add('hidden');
    };
}
info8.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage8.classList.remove('hidden');
};

if (infoPage8.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage8.classList.add('hidden');
    };
}
info9.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage9.classList.remove('hidden');
};

if (infoPage9.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage9.classList.add('hidden');
    };
}
info10.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage10.classList.remove('hidden');
};

if (infoPage10.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage10.classList.add('hidden');
    };
}
info11.onclick = function () {
    infoList.classList.add('hidden');
    infoPageList.classList.remove('hidden');
    infoPage11.classList.remove('hidden');
};

if (infoPage11.classList.contains('hidden')) {
    buttonBack.onclick = function () {
        infoList.classList.remove('hidden');
        infoPageList.classList.add('hidden');
        infoPage11.classList.add('hidden');
    };
}



function hideShow(div, div2) {
    if (div.classList.contains('hidden') && div2.classList.contains('hidden')) {
        div.classList.remove('hidden');
    } else {
        div.classList.add('hidden');
        div2.classList.add('hidden');
    }
}

function inform() {

}