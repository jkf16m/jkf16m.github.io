<script>
    import {i18n} from '$lib/localization';
</script>

<header>
    <h1>{$i18n.t('page.home.greetings')}</h1>
</header>

<p>{$i18n.t('page.home.welcome')}</p>
<h2>{$i18n.t('page.home.whoAmI')}</h2>
<p>{$i18n.t('page.home.introduction')}</p>

<!--contact me-->
<footer id="contact-me">
    <h4>{$i18n.t('page.contact.nav')}</h4>
    <ul>
        <li>Facebook: <a href="https://www.facebook.com/DanyxLive/">Mi perfil de facebook</a></li>
        <li>Email: <a href='mailto:jkf16m@gmail.com'>jkf16m@gmail.com</a></li>
        <li>Linkedin: <a href="https://www.linkedin.com/in/jos%C3%A9-daniel-flores-morales-25305a18a/">Linkedin</a></li>
    </ul>
    <small>
        {$i18n.t('page.home.portfolioSourceCode')}
        <a href='https://github.com/jkf16m/jkf16m.github.io'>{$i18n.t('page.home.here')}</a>
    </small>
</footer>