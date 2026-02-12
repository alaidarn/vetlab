'use strict';

// ============================================
// РВЛ | ҮШ ТІЛДІҢ ТОЛЫҚ АУДАРМАЛАРЫ + ФУНКЦИЯЛАР
// ============================================

// ---------- БАРЛЫҚ ҮШ ТІЛДІҢ АУДАРМАЛАРЫ ----------
const translations = {
    // ---------- ҚАЗАҚША ----------
    kk: {
        'logo.title': 'Республикалық ветеринариялық зертхана',
        'logo.sub': 'АШМ Ветеринариялық бақылау комитеті',
        'nav.home': 'Басты бет',
        'nav.about': 'Зертхана',
        'nav.services': 'Қызметтер',
        'nav.structure': 'Құрылым',
        'nav.news': 'Жаңалықтар',
        'nav.proposals': 'Ұсыныстар',
        'nav.contact': 'Байланыс',
        'hero.badge': '25+ жыл тәжірибе',
        'hero.title1': 'Дәлдік.',
        'hero.title2': 'Ашықтық.',
        'hero.title3': 'Инновация.',
        'hero.description': 'Республикалық ветеринариялық зертхана – Қазақстандағы ISO 17025 аккредитациясы бар жетекші ветеринариялық диагностика орталығы.',
        'hero.stat1': 'жыл тәжірибе',
        'hero.stat2': 'филиал',
        'hero.stat3': 'маман',
        'hero.stat4': 'талдау түрі',
        'advantages.subtitle': 'Біздің артықшылықтар',
        'advantages.title': 'Неліктен бізді',
        'advantages.title_highlight': 'таңдайды?',
        'advantage1.title': 'Передовое жабдық',
        'advantage1.desc': 'АҚШ, Германия, Швейцариядан әкелінген заманауи анализаторлар',
        'advantage2.title': 'Жылдам нәтиже',
        'advantage2.desc': 'Талдаулардың 80% - 24 сағат ішінде',
        'advantage3.title': 'Тәжірибелі мамандар',
        'advantage3.desc': 'Халықаралық сертификаттары бар 300+ ветеринар',
        'advantage4.title': 'Курьерлік қызмет',
        'advantage4.desc': '7 күн, 3 температуралық режим',
        'advantage5.title': '4 деңгейлі бақылау',
        'advantage5.desc': 'Әр нәтиже 4 рет тексеріледі',
        'advantage6.title': 'Онлайн кабинет',
        'advantage6.desc': 'Нәтижелер 24/7 қолжетімді',
        'services.subtitle': 'Біздің қызметтер',
        'services.title': '2000+',
        'services.title_highlight': 'зерттеу түрлері',
        'services.description': 'Ветеринариялық диагностиканың толық спектрі',
        'service1.title': 'ПТР диагностика',
        'service1.desc': 'Инфекцияларды анықтау, генетикалық аурулар',
        'service2.title': 'ИФА талдаулары',
        'service2.desc': 'Гормондар, аллергия, аутоиммунды аурулар',
        'service3.title': 'Гистология',
        'service3.desc': 'Тіндерді зерттеу, ісік диагностикасы',
        'service4.title': 'Биохимия',
        'service4.desc': 'Қан, несеп, жұлын сұйықтығы',
        'service5.title': 'Бактериология',
        'service5.desc': 'Микроорганизмдерді өсіру және анықтау',
        'service6.title': 'Қан тобын анықтау',
        'service6.desc': 'Иттер, мысықтар, жылқылар',
        'button.services': 'Қызметтермен танысу',
        'button.contact': 'Кеңес алу',
        'button.details': 'Толығырақ',
        'button.all_services': 'Барлық қызметтер',
        'button.download': 'Каталог жүктеу',
        'button.all_news': 'Барлық жаңалықтар',
        'button.partner': 'Серіктес болу',
        'news.subtitle': 'Жаңалықтар',
        'news.title': 'Соңғы',
        'news.title_highlight': 'жаңалықтар',
        'news.badge': 'Жаңа',
        'news1.title': 'Студенттерге арналған сайт конкурсы',
        'news1.desc': 'Республикалық ветеринариялық зертхана IT-мамандықтарының студенттері арасында сайт жасау конкурсын өткізеді.',
        'news2.title': 'ПТР зертханасы жаңғыртылды',
        'news2.desc': 'Германиядан жаңа Bio-Rad CFX96 құрылғысы орнатылды, бұл талдау уақытын 30% қысқартады.',
        'news3.title': 'Семинар: Африкалық чума',
        'news3.desc': '20 ақпанда Астанада ветеринарларға арналған тегін семинар өтеді. Тіркелу ашық.',
        'news4.title': 'Халықаралық аккредитация',
        'news4.desc': 'РВЛ ISO 17025 сәйкестігін растап, халықаралық сертификат алды.',
        'testimonials.subtitle': 'Клиенттер пікірі',
        'testimonials.title': 'Бізге',
        'testimonials.title_highlight': 'сенеді',
        'testimonial1.text': 'РВЛ-мен 5 жылдан астам жұмыс істейміз. Әрқашан дәл нәтиже, жылдам сервис. Клиникамыздың басты серіктесі.',
        'testimonial1.name': 'Айбек Серіков',
        'testimonial1.position': '"Vet City" желісінің бас дәрігері',
        'testimonial2.text': 'Қан тобын анықтау, ПТР, биохимия – барлығын РВЛ-да тапсырамыз. Курьерлер өздері келіп алады, өте ыңғайлы.',
        'testimonial2.name': 'Мария Шевченко',
        'testimonial2.position': '"ЗооЗабота" клиникасы',
        'cta.title': 'Серіктестікке шақырамыз!',
        'cta.desc': 'Ветеринариялық клиникалар, питомниктер, зообақтар, жеке дәрігерлер',
        'cta.feature1': 'Арнайы бағалар',
        'cta.feature2': 'Тегін курьер',
        'cta.feature3': '24/7 қолдау',
        'footer.nav': 'Навигация',
        'footer.services': 'Қызметтер',
        'footer.contact': 'Байланыс',
        'footer.about.text': 'ISO 17025 аккредитациясы<br>© 2000-2026, Барлық құқықтар қорғалған.',
        'footer.link1': 'Құпиялық саясаты',
        'footer.link2': 'Қолдану шарттары',
        'footer.link3': 'Cookie файлдары',
        'footer.slogan': 'РВЛ – Қазақстан ветеринариясының сапа стандарты',
        'contact.page_title': 'Байланыс және кері байланыс',
        'contact.head_office': 'Бас кеңсе',
        'contact.hours_title': 'Жұмыс кестесі',
        'contact.address': 'Астана, Мәңгілік Ел, 12/1',
        'contact.hours': 'Дүй-Жұм: 09:00 - 18:00',
        'contact.form.error': 'Барлық өрістерді толтырыңыз',
        'contact.form.success': 'Хабарлама жіберілді! Жауапты жақын арада күтіңіз.',
        'cookie.text': 'Біз cookie файлдарын қолданамыз. Сайтты қолдана отырып, сіз келісесіз.',
        'cookie.button': 'Келісемін',
        'admin.alert': 'Демо-режим: админ-панельге кіру. (Логин/пароль: demo/demo)'
    },
    
    // ---------- ОРЫСША ----------
    ru: {
        'logo.title': 'Республиканская ветеринарная лаборатория',
        'logo.sub': 'Комитет ветеринарного контроля МСХ РК',
        'nav.home': 'Главная',
        'nav.about': 'О лаборатории',
        'nav.services': 'Услуги',
        'nav.structure': 'Структура',
        'nav.news': 'Новости',
        'nav.proposals': 'Предложения',
        'nav.contact': 'Контакты',
        'hero.badge': '25+ лет опыта',
        'hero.title1': 'Точность.',
        'hero.title2': 'Прозрачность.',
        'hero.title3': 'Инновации.',
        'hero.description': 'Республиканская ветеринарная лаборатория – ведущий центр ветеринарной диагностики в Казахстане с аккредитацией ISO 17025.',
        'hero.stat1': 'лет опыта',
        'hero.stat2': 'филиалов',
        'hero.stat3': 'специалистов',
        'hero.stat4': 'видов анализов',
        'advantages.subtitle': 'Наши преимущества',
        'advantages.title': 'Почему выбирают',
        'advantages.title_highlight': 'нас?',
        'advantage1.title': 'Передовое оборудование',
        'advantage1.desc': 'Современные анализаторы из США, Германии, Швейцарии',
        'advantage2.title': 'Быстрый результат',
        'advantage2.desc': '80% анализов - в течение 24 часов',
        'advantage3.title': 'Опытные специалисты',
        'advantage3.desc': '300+ ветеринаров с международными сертификатами',
        'advantage4.title': 'Курьерская служба',
        'advantage4.desc': '7 дней, 3 температурных режима',
        'advantage5.title': '4-уровневый контроль',
        'advantage5.desc': 'Каждый результат проверяется 4 раза',
        'advantage6.title': 'Онлайн-кабинет',
        'advantage6.desc': 'Результаты доступны 24/7',
        'services.subtitle': 'Наши услуги',
        'services.title': '2000+',
        'services.title_highlight': 'видов исследований',
        'services.description': 'Полный спектр ветеринарной диагностики',
        'service1.title': 'ПЦР-диагностика',
        'service1.desc': 'Выявление инфекций, генетические заболевания',
        'service2.title': 'ИФА-анализы',
        'service2.desc': 'Гормоны, аллергии, аутоиммунные заболевания',
        'service3.title': 'Гистология',
        'service3.desc': 'Исследование тканей, диагностика опухолей',
        'service4.title': 'Биохимия',
        'service4.desc': 'Кровь, моча, спинномозговая жидкость',
        'service5.title': 'Бактериология',
        'service5.desc': 'Культивирование и идентификация микроорганизмов',
        'service6.title': 'Определение группы крови',
        'service6.desc': 'Собаки, кошки, лошади',
        'button.services': 'Ознакомиться с услугами',
        'button.contact': 'Получить консультацию',
        'button.details': 'Подробнее',
        'button.all_services': 'Все услуги',
        'button.download': 'Скачать каталог',
        'button.all_news': 'Все новости',
        'button.partner': 'Стать партнером',
        'news.subtitle': 'Новости',
        'news.title': 'Последние',
        'news.title_highlight': 'новости',
        'news.badge': 'Новое',
        'news1.title': 'Конкурс сайтов для студентов',
        'news1.desc': 'Республиканская ветеринарная лаборатория проводит конкурс по разработке сайта среди студентов IT-специальностей.',
        'news2.title': 'Модернизация ПЦР-лаборатории',
        'news2.desc': 'Установлено новое оборудование Bio-Rad CFX96 из Германии, что сокращает время анализа на 30%.',
        'news3.title': 'Семинар: Африканская чума',
        'news3.desc': '20 февраля в Астане пройдет бесплатный семинар для ветеринаров. Регистрация открыта.',
        'news4.title': 'Международная аккредитация',
        'news4.desc': 'РВЛ подтвердила соответствие ISO 17025 и получила международный сертификат.',
        'testimonials.subtitle': 'Отзывы клиентов',
        'testimonials.title': 'Нам',
        'testimonials.title_highlight': 'доверяют',
        'testimonial1.text': 'Работаем с РВЛ более 5 лет. Всегда точные результаты, быстрый сервис. Главный партнер нашей клиники.',
        'testimonial1.name': 'Айбек Сериков',
        'testimonial1.position': 'Главный врач сети "Vet City"',
        'testimonial2.text': 'Определение группы крови, ПЦР, биохимия – все сдаем в РВЛ. Курьеры сами приезжают забирать, очень удобно.',
        'testimonial2.name': 'Мария Шевченко',
        'testimonial2.position': 'Клиника "ЗооЗабота"',
        'cta.title': 'Приглашаем к партнерству!',
        'cta.desc': 'Ветеринарные клиники, питомники, зоопарки, частные врачи',
        'cta.feature1': 'Специальные цены',
        'cta.feature2': 'Бесплатный курьер',
        'cta.feature3': 'Поддержка 24/7',
        'footer.nav': 'Навигация',
        'footer.services': 'Услуги',
        'footer.contact': 'Контакты',
        'footer.about.text': 'Аккредитация ISO 17025<br>© 2000-2026, Все права защищены.',
        'footer.link1': 'Политика конфиденциальности',
        'footer.link2': 'Условия использования',
        'footer.link3': 'Cookie файлы',
        'footer.slogan': 'РВЛ – стандарт качества казахстанской ветеринарии',
        'contact.page_title': 'Контакты и обратная связь',
        'contact.head_office': 'Головной офис',
        'contact.hours_title': 'Режим работы',
        'contact.address': 'Астана, пр. Мәңгілік Ел, 12/1',
        'contact.hours': 'Пн-Пт: 09:00 - 18:00',
        'contact.form.error': 'Заполните все поля',
        'contact.form.success': 'Сообщение отправлено! Ожидайте ответа.',
        'cookie.text': 'Мы используем cookie файлы. Продолжая использовать сайт, вы соглашаетесь.',
        'cookie.button': 'Согласен',
        'admin.alert': 'Демо-режим: вход в админ-панель. (Логин/пароль: demo/demo)'
    },
    
    // ---------- АҒЫЛШЫНША ----------
    en: {
        'logo.title': 'Republican Veterinary Laboratory',
        'logo.sub': 'Committee of Veterinary Control, MoA RK',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.structure': 'Structure',
        'nav.news': 'News',
        'nav.proposals': 'Proposals',
        'nav.contact': 'Contact',
        'hero.badge': '25+ years of experience',
        'hero.title1': 'Accuracy.',
        'hero.title2': 'Transparency.',
        'hero.title3': 'Innovation.',
        'hero.description': 'Republican Veterinary Laboratory – leading veterinary diagnostic center in Kazakhstan with ISO 17025 accreditation.',
        'hero.stat1': 'years exp.',
        'hero.stat2': 'branches',
        'hero.stat3': 'experts',
        'hero.stat4': 'test types',
        'advantages.subtitle': 'Our advantages',
        'advantages.title': 'Why choose',
        'advantages.title_highlight': 'us?',
        'advantage1.title': 'Advanced equipment',
        'advantage1.desc': 'Modern analyzers from USA, Germany, Switzerland',
        'advantage2.title': 'Fast results',
        'advantage2.desc': '80% of tests - within 24 hours',
        'advantage3.title': 'Experienced specialists',
        'advantage3.desc': '300+ veterinarians with international certificates',
        'advantage4.title': 'Courier service',
        'advantage4.desc': '7 days, 3 temperature modes',
        'advantage5.title': '4-level control',
        'advantage5.desc': 'Each result is checked 4 times',
        'advantage6.title': 'Online cabinet',
        'advantage6.desc': 'Results available 24/7',
        'services.subtitle': 'Our services',
        'services.title': '2000+',
        'services.title_highlight': 'test types',
        'services.description': 'Full spectrum of veterinary diagnostics',
        'service1.title': 'PCR diagnostics',
        'service1.desc': 'Infection detection, genetic diseases',
        'service2.title': 'ELISA tests',
        'service2.desc': 'Hormones, allergies, autoimmune diseases',
        'service3.title': 'Histology',
        'service3.desc': 'Tissue examination, tumor diagnostics',
        'service4.title': 'Biochemistry',
        'service4.desc': 'Blood, urine, cerebrospinal fluid',
        'service5.title': 'Bacteriology',
        'service5.desc': 'Microorganism cultivation and identification',
        'service6.title': 'Blood typing',
        'service6.desc': 'Dogs, cats, horses',
        'button.services': 'Explore services',
        'button.contact': 'Get consultation',
        'button.details': 'Read more',
        'button.all_services': 'All services',
        'button.download': 'Download catalog',
        'button.all_news': 'All news',
        'button.partner': 'Become a partner',
        'news.subtitle': 'News',
        'news.title': 'Latest',
        'news.title_highlight': 'news',
        'news.badge': 'New',
        'news1.title': 'Website contest for students',
        'news1.desc': 'Republican Veterinary Laboratory announces a website development contest among IT students.',
        'news2.title': 'PCR lab modernization',
        'news2.desc': 'New Bio-Rad CFX96 equipment from Germany installed, reducing analysis time by 30%.',
        'news3.title': 'Seminar: African swine fever',
        'news3.desc': 'Free seminar for veterinarians in Astana on February 20. Registration is open.',
        'news4.title': 'International accreditation',
        'news4.desc': 'RVL confirmed ISO 17025 compliance and received international certificate.',
        'testimonials.subtitle': 'Testimonials',
        'testimonials.title': 'They',
        'testimonials.title_highlight': 'trust us',
        'testimonial1.text': 'We have been working with RVL for more than 5 years. Always accurate results, fast service. Main partner of our clinic.',
        'testimonial1.name': 'Aibek Serikov',
        'testimonial1.position': 'Chief Physician of "Vet City" network',
        'testimonial2.text': 'Blood typing, PCR, biochemistry – we do all at RVL. Couriers come to pick up samples, very convenient.',
        'testimonial2.name': 'Maria Shevchenko',
        'testimonial2.position': '"ZooZabota" Clinic',
        'cta.title': 'We invite you to partnership!',
        'cta.desc': 'Veterinary clinics, nurseries, zoos, private doctors',
        'cta.feature1': 'Special prices',
        'cta.feature2': 'Free courier',
        'cta.feature3': '24/7 support',
        'footer.nav': 'Navigation',
        'footer.services': 'Services',
        'footer.contact': 'Contacts',
        'footer.about.text': 'ISO 17025 accreditation<br>© 2000-2026, All rights reserved.',
        'footer.link1': 'Privacy policy',
        'footer.link2': 'Terms of use',
        'footer.link3': 'Cookie policy',
        'footer.slogan': 'RVL – quality standard of Kazakhstan veterinary',
        'contact.page_title': 'Contacts and Feedback',
        'contact.head_office': 'Head Office',
        'contact.hours_title': 'Working Hours',
        'contact.address': 'Astana, Mangilik El ave., 12/1',
        'contact.hours': 'Mon-Fri: 09:00 - 18:00',
        'contact.form.error': 'Please fill all fields',
        'contact.form.success': 'Message sent! Expect a reply soon.',
        'cookie.text': 'We use cookies. By continuing to use the site, you agree.',
        'cookie.button': 'Accept',
        'admin.alert': 'Demo mode: admin panel login. (Login/password: demo/demo)'
    }
};

// ============================================
// ТІЛ АУЫСТЫРУ ЖӘНЕ БАСҚА ФУНКЦИЯЛАР
// ============================================

// PRELOADER - БІРДЕН ЖОҒАЛУ ҮШІН
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    console.log('========================================');
    console.log('РВЛ | Үш тілдік жүйе іске қосылды');
    console.log('========================================');

    // ---------- ТІЛ БАТЫРМАЛАРЫН ТАБУ ----------
    const langBtns = document.querySelectorAll('.lang-btn');
    console.log('Тіл батырмалары табылды:', langBtns.length);
    
    if (langBtns.length === 0) {
        console.error('ҚАТЕ: .lang-btn класы бар батырмалар табылмады!');
        return;
    }

    // ---------- ЖАДТАН ТІЛДІ ОҚУ ----------
    let currentLang = localStorage.getItem('rvl_lang') || 'kk';

    // ---------- ТІЛ АУЫСТЫРУ ФУНКЦИЯСЫ ----------
    function setLanguage(lang) {
        if (!translations[lang]) return;
        
        // Барлық data-i18n элементтерін ауыстыру
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        // Плейсхолдерлерді ауыстыру
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Батырмалардың active класын ауыстыру
        langBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Тілді localStorage-ке сақтау
        localStorage.setItem('rvl_lang', lang);
        currentLang = lang;
        
        // Meta тегтерді жаңарту
        updateMetaTags(lang);
        
        // HTML тілін өзгерту
        document.documentElement.lang = lang;
        
        console.log(`✅ Тіл ауыстырылды: ${lang.toUpperCase()}`);
    }

    // ---------- META ТЕГТЕРДІ ЖАҢАРТУ ----------
    function updateMetaTags(lang) {
        const titles = {
            kk: 'Республикалық ветеринариялық зертхана - ресми сайт',
            ru: 'Республиканская ветеринарная лаборатория - официальный сайт',
            en: 'Republican Veterinary Laboratory - official website'
        };
        
        const descriptions = {
            kk: 'РВЛ - ветеринариялық бақылау, диагностика, зертханалық қызметтер. ISO 17025 аккредитация.',
            ru: 'РВЛ - ветеринарный контроль, диагностика, лабораторные услуги. Аккредитация ISO 17025.',
            en: 'RVL - veterinary control, diagnostics, laboratory services. ISO 17025 accredited.'
        };
        
        document.title = titles[lang] || titles.kk;
        
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', descriptions[lang] || descriptions.kk);
        
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', titles[lang] || titles.kk);
        
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', descriptions[lang] || descriptions.kk);
    }

    // ---------- ТІЛ БАТЫРМАЛАРЫНА СОБЫТИЕ БЕКІТУ ----------
    langBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage(this.dataset.lang);
        });
    });

    // ---------- БАСТАПҚЫ ТІЛДІ ОРНАТУ ----------
    setLanguage(currentLang);

    // ---------- МОБИЛЬДІ МӘЗІР ----------
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    if (navMenu) {
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                if (mobileToggle) {
                    const spans = mobileToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }

    // ---------- BACK TO TOP ----------
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            backToTop.classList.toggle('show', window.scrollY > 300);
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---------- ФОРМА КЕРІ БАЙЛАНЫС ----------
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            
            if (!name || !email || !message) {
                alert(translations[currentLang]['contact.form.error'] || 'Барлық өрістерді толтырыңыз');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('E-mail дұрыс емес формат');
                return;
            }
            
            alert(translations[currentLang]['contact.form.success'] || 'Хабарлама жіберілді!');
            this.reset();
        });
    }

    // ---------- АДМИН-ПАНЕЛЬ ДЕМО ----------
    const adminBtn = document.getElementById('adminDemoBtn');
    if (adminBtn) {
        adminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert(translations[currentLang]['admin.alert'] || 'Демо-режим: админ-панельге кіру.');
        });
    }

    // ---------- COOKIE CONSENT ----------
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptBtn = document.getElementById('acceptCookies');
    
    if (cookieConsent && !localStorage.getItem('cookies_accepted')) {
        setTimeout(() => {
            cookieConsent.style.display = 'flex';
        }, 1000);
    }
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookies_accepted', 'true');
            cookieConsent.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => cookieConsent.remove(), 300);
        });
    }

    // ---------- СІЛТЕМЕЛЕРГЕ ҚАУІПСІЗДІК ----------
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        if (!link.rel) link.rel = 'noopener noreferrer';
    });

    console.log('✅ РВЛ сайты сәтті жүктелді | Тіл: ' + currentLang);
});