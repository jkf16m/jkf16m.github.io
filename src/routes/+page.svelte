<script>
    import { i18n, language } from "$lib/localization.svelte";
</script>

<header>
    <h1>{$i18n.t('page.home.greetings')}</h1>
</header>

<p>{$i18n.t('page.home.welcome')}</p>

<h2 id="about">{$i18n.t('page.home.whoAmI')}</h2>
<p>{$i18n.t('page.home.introduction')}</p>

<h2 id="projects">{$i18n.t('page.projects.nav')}</h2>

<!--contact me-->
<footer id="contact-me">
    <h4>{$i18n.t('page.contact.nav')}</h4>
    <ul>
        <li>Email: <a href='mailto:jkf16m@gmail.com'>jkf16m@gmail.com</a></li>
        <li><a href="https://www.facebook.com/DanyxLive/">Facebook</a></li>
        <li><a href="https://www.linkedin.com/in/jos%C3%A9-daniel-flores-morales-25305a18a/">Linkedin</a></li>
    </ul>
    <small>
        {$i18n.t('page.home.portfolioSourceCode')}
        <a href='https://github.com/jkf16m/jkf16m.github.io'>{$i18n.t('page.home.here')}</a>
    </small>
</footer>