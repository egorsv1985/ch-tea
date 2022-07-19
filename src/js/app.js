/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
Документация:
Сниппет (HTML): spollers
*/
flsFunctions.spollers();

/*
Модуль работы с табами
Документация:
Сниппет (HTML): tabs
*/
flsFunctions.tabs();

/*
Модуль "показать еще"
Документация по работе в шаблоне:
Сниппет (HTML): showmore
*/
flsFunctions.showMore();

/*
Попапы
Документация по работе в шаблоне:
Сниппет (HTML): pl
*/
import "./libs/popup.js";

/*
Модуль параллакса мышью
Документация по работе в шаблоне:
Сниппет (HTML): 
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы: добавление классов, работа с placeholder. */
// flsForms.formFieldsInit();

/* Oтправка формы со встроенной валидацией полей. false - отключит валидацию */
// flsForms.formSubmit(true);

/* Модуль формы "колличество" */
// flsForms.formQuantity();

/* Модуль формы "показать пароль" */
// flsForms.formViewpass();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне:
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: В HTML добавляем img, video, audio, iframe но вместо src пишем data-src
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
//import './files/scroll/lazyload.js';

// Наблюдатель за объектами c атрибутом data-watch
// Документация по работе в шаблоне: js/libs/watcher.js
// Сниппет(HTML):
// import './libs/watcher.js'

// Функции работы скроллом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================

const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    // lottiePlayer.play();
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    // lottiePlayer.stop();
  }
  lastScroll = currentScroll;
});

// video
const video = document.querySelector(".main__video");
const juice = document.querySelector(".orange-juice");
const btn = document.getElementById("play-pause");

function togglePlayPause() {
  if (video.paused) {
    btn.className = "pause";
    video.play();
  } else {
    btn.className = "play";
    video.pause();
  }
}

video.onclick = function () {
  togglePlayPause();
};
btn.onclick = function () {
  togglePlayPause();
};
video.addEventListener("timeupdate", function () {
  const juicePos = video.currentTime / video.duration;
  juice.style.width = juicePos * 100 + "%";
  if (video.ended) {
    btn.className = "play";
  }
});

window.onload = function () {
  MaskedInput({
    elm: document.getElementById("tel"), // select only by id
    format: "+7 (__) ___-__-__",
    separator: "+7 ()-",
  });
};

// masked_input_1.4-min.js
// angelwatt.com/coding/masked_input.php
(function (a) {
  a.MaskedInput = function (f) {
    if (!f || !f.elm || !f.format) {
      return null;
    }
    if (!(this instanceof a.MaskedInput)) {
      return new a.MaskedInput(f);
    }
    var o = this,
      d = f.elm,
      s = f.format,
      i = f.allowed || "0123456789",
      h =
        f.allowedfx ||
        function () {
          return true;
        },
      p = f.separator || "/:-",
      n = f.typeon || "_YMDhms",
      c = f.onbadkey || function () {},
      q = f.onfilled || function () {},
      w = f.badkeywait || 0,
      A = f.hasOwnProperty("preserve") ? !!f.preserve : true,
      l = true,
      y = false,
      t = s,
      j = (function () {
        if (window.addEventListener) {
          return function (E, C, D, B) {
            E.addEventListener(C, D, B === undefined ? false : B);
          };
        }
        if (window.attachEvent) {
          return function (D, B, C) {
            D.attachEvent("on" + B, C);
          };
        }
        return function (D, B, C) {
          D["on" + B] = C;
        };
      })(),
      u = function () {
        for (var B = d.value.length - 1; B >= 0; B--) {
          for (var D = 0, C = n.length; D < C; D++) {
            if (d.value[B] === n[D]) {
              return false;
            }
          }
        }
        return true;
      },
      x = function (C) {
        try {
          C.focus();
          if (C.selectionStart >= 0) {
            return C.selectionStart;
          }
          if (document.selection) {
            var B = document.selection.createRange();
            return -B.moveStart("character", -C.value.length);
          }
          return -1;
        } catch (D) {
          return -1;
        }
      },
      b = function (C, E) {
        try {
          if (C.selectionStart) {
            C.focus();
            C.setSelectionRange(E, E);
          } else {
            if (C.createTextRange) {
              var B = C.createTextRange();
              B.move("character", E);
              B.select();
            }
          }
        } catch (D) {
          return false;
        }
        return true;
      },
      m = function (D) {
        D = D || window.event;
        var C = "",
          E = D.which,
          B = D.type;
        if (E === undefined || E === null) {
          E = D.keyCode;
        }
        if (E === undefined || E === null) {
          return "";
        }
        switch (E) {
          case 8:
            C = "bksp";
            break;
          case 46:
            C = B === "keydown" ? "del" : ".";
            break;
          case 16:
            C = "shift";
            break;
          case 0:
          case 9:
          case 13:
            C = "etc";
            break;
          case 37:
          case 38:
          case 39:
          case 40:
            C =
              !D.shiftKey && D.charCode !== 39 && D.charCode !== undefined
                ? "etc"
                : String.fromCharCode(E);
            break;
          default:
            C = String.fromCharCode(E);
            break;
        }
        return C;
      },
      v = function (B, C) {
        if (B.preventDefault) {
          B.preventDefault();
        }
        B.returnValue = C || false;
      },
      k = function (B) {
        var D = x(d),
          F = d.value,
          E = "",
          C = true;
        switch (C) {
          case i.indexOf(B) !== -1:
            D = D + 1;
            if (D > s.length) {
              return false;
            }
            while (p.indexOf(F.charAt(D - 1)) !== -1 && D <= s.length) {
              D = D + 1;
            }
            if (!h(B, D)) {
              c(B);
              return false;
            }
            E = F.substr(0, D - 1) + B + F.substr(D);
            if (
              i.indexOf(F.charAt(D)) === -1 &&
              n.indexOf(F.charAt(D)) === -1
            ) {
              D = D + 1;
            }
            break;
          case B === "bksp":
            D = D - 1;
            if (D < 0) {
              return false;
            }
            while (
              i.indexOf(F.charAt(D)) === -1 &&
              n.indexOf(F.charAt(D)) === -1 &&
              D > 1
            ) {
              D = D - 1;
            }
            E = F.substr(0, D) + s.substr(D, 1) + F.substr(D + 1);
            break;
          case B === "del":
            if (D >= F.length) {
              return false;
            }
            while (p.indexOf(F.charAt(D)) !== -1 && F.charAt(D) !== "") {
              D = D + 1;
            }
            E = F.substr(0, D) + s.substr(D, 1) + F.substr(D + 1);
            D = D + 1;
            break;
          case B === "etc":
            return true;
          default:
            return false;
        }
        d.value = "";
        d.value = E;
        b(d, D);
        return false;
      },
      g = function (B) {
        if (i.indexOf(B) === -1 && B !== "bksp" && B !== "del" && B !== "etc") {
          var C = x(d);
          y = true;
          c(B);
          setTimeout(function () {
            y = false;
            b(d, C);
          }, w);
          return false;
        }
        return true;
      },
      z = function (C) {
        if (!l) {
          return true;
        }
        C = C || event;
        if (y) {
          v(C);
          return false;
        }
        var B = m(C);
        if ((C.metaKey || C.ctrlKey) && (B === "X" || B === "V")) {
          v(C);
          return false;
        }
        if (C.metaKey || C.ctrlKey) {
          return true;
        }
        if (d.value === "") {
          d.value = s;
          b(d, 0);
        }
        if (B === "bksp" || B === "del") {
          k(B);
          v(C);
          return false;
        }
        return true;
      },
      e = function (C) {
        if (!l) {
          return true;
        }
        C = C || event;
        if (y) {
          v(C);
          return false;
        }
        var B = m(C);
        if (B === "etc" || C.metaKey || C.ctrlKey || C.altKey) {
          return true;
        }
        if (B !== "bksp" && B !== "del" && B !== "shift") {
          if (!g(B)) {
            v(C);
            return false;
          }
          if (k(B)) {
            if (u()) {
              q();
            }
            v(C, true);
            return true;
          }
          if (u()) {
            q();
          }
          v(C);
          return false;
        }
        return false;
      },
      r = function () {
        if (
          !d.tagName ||
          (d.tagName.toUpperCase() !== "INPUT" &&
            d.tagName.toUpperCase() !== "TEXTAREA")
        ) {
          return null;
        }
        if (!A || d.value === "") {
          d.value = s;
        }
        j(d, "keydown", function (B) {
          z(B);
        });
        j(d, "keypress", function (B) {
          e(B);
        });
        j(d, "focus", function () {
          t = d.value;
        });
        j(d, "blur", function () {
          if (d.value !== t && d.onchange) {
            d.onchange();
          }
        });
        return o;
      };
    o.resetField = function () {
      d.value = s;
    };
    o.setAllowed = function (B) {
      i = B;
      o.resetField();
    };
    o.setFormat = function (B) {
      s = B;
      o.resetField();
    };
    o.setSeparator = function (B) {
      p = B;
      o.resetField();
    };
    o.setTypeon = function (B) {
      n = B;
      o.resetField();
    };
    o.setEnabled = function (B) {
      l = B;
    };
    return r();
  };
})(window);

let fields = document.querySelectorAll(".field__file");
Array.prototype.forEach.call(fields, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector(".field__file-fake").innerText;

  input.addEventListener("change", function (e) {
    let countFiles = "";
    if (this.files && this.files.length >= 1) countFiles = this.files.length;

    if (countFiles)
      label.querySelector(".field__file-fake").innerText =
        "Выбрано файлов: " + countFiles;
    else label.querySelector(".field__file-fake").innerText = labelVal;
  });
});
