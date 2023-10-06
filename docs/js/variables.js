const sourceLink = 'https://github.com/nasan016/nasanterminal';
const github = "https://github.com/1deam0nster";
const linkedin = "https://www.linkedin.com/in/reutadm/";
const email = 'reutadm@gmail.com';
const website = 'https://reutadmitry.ru/'
const telegram = "https://t.me/reutadm";
const whatsapp = ""

command_line = '<p><span class="stark"><span class="lightpurple">guest</span>@<span class="jewel">reut.dev</span>:$ ~ </span><input spellcheck="false" autocomplete="off" id="user_cmd" onkeypress="enterCommand(event)"></input></p>';

congratulationsMessage = [
  "Congratulations, you found the password!",
  "Good Job! I'm proud of you!",
  "You're the best! Even I couldn't do it!",
  'That\'s all. 😗',
  "<br>"
];

squidMessage = [
  "You tried...",
  "Here's 2 hours of squid to relax/study/work to. 🦑",
  "<br>"
];

commandList = [
  'help',
  'about',
  'links',
  'contact',
  'message',
  'cv',
  'clear',
];


help = [
  '┌ ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ┐',
    '│<span class="command">  \'about\'</span>      Обо мне                              │',
    '│<span class="command">  \'links\'</span>      Ссылки на мои соцсети                │',
    '│<span class="command">  \'contact\'</span>    Контактная информация                │',
    '│<span class="command">  \'message\'</span>    Прислать сообщение                   │',
    '│<span class="command">  \'cv\'</span>         Скачать резюмэ                       │',
    '│<span class="command">  \'clear\'</span>      Очистить командную строку.           │',
    '└ ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ┘',
    'Нажми <span class="lightgreen">[Tab]</span> для автокомплита команды',
    'Нажми <span class="lightgreen">[Esc]</span> для очистки запроса командной строки.',
    'Нажми <span class="lightgreen">[↑][↓]</span> для просмотра предыдущих командц.',
    "<br>"
  ];

about = [
    "Привет, Я — Дмитрий, разработчик c большим стажем и страстью к созданию уникальных интерфейсов пользовательского опыта. c",
    " моим мощным арсеналом навыков и богатым опытом в веб-разработке, я готов взять на себя самые сложные проекты и обеспечить оптимальные решения.",
    "Мое призвание к программированию началось еще в юности, и после получения высшего образования в Московском Государственном Институте Электроники и Математики, я начал активно разрабатывать интерфейсы и веб-приложения. Мой опыт работы обхватывает различные области, от информационных технологий и системной интеграции до интернета и веб-разработки.",
    "В Almavending, я занимался разработкой программного обеспечения для аппаратов вендинга. Мои обязанности включали проектирование аппаратной и программной составляющей, а также использование разнообразных технологий, таких как Atmel MCU, Raspberry Pi, Linux, Docker, C++, Python, JS и SQLite. Я разработал собственный протокол обмена командами между микроконтроллером и головным устройством на основе Raspberry Pi и Atmel2560. Кроме того, я создал программное обеспечение на Python и Docker для связи с микроконтроллером, облачной фискализации и другими функциями. Мой опыт также включает разработку Telegram бота для тестирования и статистики аппарата.",
    "Как Junior frontend developer в ОТР, я работал над проектированием интерфейсов и созданием кликабельных прототипов. Здесь я использовал Git, Webpack и Vue.js, чтобы создавать современные и отзывчивые интерфейсы пользовательского опыта.",
    "Кроме того, у меня огромный опыт в проектировании интерфейсов UX/UI, используя такие инструменты, как JavaScript, HTML5, CSS3 и различные фреймворки, такие как VueJS, AngularJS, Flask и Vuetify. Я знаком с принципами разработки RESTful API и имею опыт работы с различными форматами данных, такими как JSON и XML. Я также хорошо владею инструментами разработчика, такими как Git и командной строкой Linux/Windows. Мой опыт работы с миниПК и микроконтроллерами включает такие платформы, как Arduino Atmel, ESP8266/ESP32, Cortex M3 (Particle), Omega 2, Raspberry Pi и Orange Pi. Я также знаком с работой с различными датчиками и исполнительными устройствами, включая шаговые двигатели и различные цифровые/аналоговые датчики.",
    "Я постоянно совершенствую свои навыки и стремлюсь участвовать в новых и захватывающих проектах. С мной вы получите профессионала, который предоставит вам передовые и качественные результаты.",
    "Берегите себя и спасибо за ваше внимание",
    "<br>"
];

banner = [
  "<div class=\"container\">",
  "<h2 class=\"lead\">Добро пожаловать в интерактивную консоль.</h2>",
  "</div>",
  "Введите 'help' что бы узнать список доступных команд.",
  "<br>"
];

links = [
  "<h3>Добро пожаловать в ReutTerminal v1.0.0</h3>",
  "Введите <span class=\"command\">'whatsapp'</span> что бы перейти в мой WhatsApp или кликни <a href=\"" + whatsapp + "\" target=\"_blank\">сюда</a>.",
  "Введите <span class=\"command\">'telegram'</span> что бы перейти в мой Telegram или кликни <a href=\"" + telegram + "\" target=\"_blank\">сюда</a>.",
  "Введите <span class=\"command\">'repo'</span> что бы перейти в мой GitHub или кликни <a href=\"" + github + "\" target=\"_blank\">сюда</a>.",
  "Введите <span class=\"command\">'gui'</span> что бы посмотреть мои работы по UI/UX <a href=\"" + website + "\" target=\" _blank\">сюда</a>",
  "<br>"
  ];

contact = [
    "<h4>Контактная информация:</h4>",
    "Телефон: +7 (999) 8426595",
    "Email: reutadm@gmail.com",
    "Местоположение: Москва",
    "<br>"
];

cv = [
  '  Скачать резюмэ в <a href="#pdf" target="_blank">PDF</a>',
  '<br>'
  ];

defaultMessage = [
  "<div class=\"container\">",
  "<p class=\"lead\">Добро пожаловать в интерактивную консоль.</p>",
  "</div>",
  "Введите 'help' что бы начать.",
  "<br>"
];


