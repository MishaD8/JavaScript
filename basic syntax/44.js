// 44
// стандартная библиотека
/* JavaScript, как и любой другой язык, поставляется с набором полезных функций. Все вместе они составляют так называемую стандартную библиотеку. В неё обычно входят тысячи функций, которые невозможно выучить — этого и не нужно делать. Подразумевается, что любой программист знает, где искать документацию по ним и примерно представляет себе, чего он хочет достичь. А дальше — дело техники. Если отнять у программистов интернет, то большинство не сможет ничего запрограммировать.

Для новичков эта информация часто выглядит так: «Сходи туда, не знаю куда, принеси то, не знаю что». То есть непонятно, как узнавать про эти функции, когда ты ничего не знаешь вообще. Как ни странно, не существует способа раз и навсегда познать всё, что нужно познать. Любой разработчик в процессе своего профессионального взросления знакомится со всё более интересными функциями, решающими его задачи более элегантно, и таким образом пополняет свой арсенал.

Вот некоторые советы, как узнавать о новых функциях:

Всегда чётко отслеживайте, с чем вы сейчас работаете (какой тип данных). Почти всегда вы найдете необходимую функцию в соответствующем разделе документации — например, для работы со строками нужно изучать строковые функции.
Периодически открывайте раздел со стандартными функциями по изучаемой тематике и просто пробегайтесь по ним, изучая сигнатуры и способы использования.
Чаще читайте чужой код, особенно код библиотек, которые вы используете. Он весь доступен на GitHub.
У JavaScript есть свои особенности по структуре стандартной библиотеки. Так как его код может исполняться в разных средах, таких как серверное окружение или браузер, то возможности стандартной библиотеки сильно зависят от варианта использования. Например, из браузера невозможно выполнять некоторые задачи, которые необходимо уметь выполнять на сервере. Документацию по серверной части необходимо смотреть на сайте https://nodejs.org. Серверные части стандартной библиотеки организованы в модули, у каждого модуля есть своя страница с описанием всех функций, находящихся внутри него. Например, модуль fs необходим для работы с файловой системой, через его функции происходит запись и чтение файлов.

Если говорить про браузер, то там вообще мало что есть. По большей части это какие-то базовые функции, встроенные в сам язык — например те же функции для работы с математикой. Остальные возможности добавляются через использование сторонних библиотек. */
const motto = 'Family, Duty, Honor';
console.log(typeof motto);