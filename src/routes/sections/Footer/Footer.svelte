<script lang="ts">
    import { version } from "$app/environment";
    import { i18n } from "$lib/localization.svelte";
</script>

<footer id="contact-me">
    <div class="t-flex t-flex-row t-justify-around">
        <section>
            <h4>{$i18n.t('page.footer.nav')}</h4>
            <ul>
                <li>Email: <a href='mailto:jkf16m@gmail.com'>jkf16m@gmail.com</a></li>
                <li><a href="https://www.facebook.com/DanyxLive/">Facebook</a></li>
                <li><a href="https://www.linkedin.com/in/jos%C3%A9-daniel-flores-morales-25305a18a/">Linkedin</a></li>
                <li><a href="https://www.hackerrank.com/profile/jkf16m">Hackerrank</a></li>
            </ul>
        </section>
        <section>
            <h4>{$i18n.t('page.footer.credits.title')}</h4>
            <ul>
                <li>{$i18n.t('page.footer.credits.family')}</li>
                <li>{$i18n.t('page.footer.credits.coworkers')}</li>
                <li>{$i18n.t('page.footer.credits.teachers')}</li>
                <li>
                    {$i18n.t('page.footer.credits.alejandroTaboada')} 
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/channel/UC7QoKU6bj1QbXQuNIjan82Q">
                                Canal de youtube "Programacion ATS"
                            </a>
                        </li>
                        <li>
                            <a href="https://youtu.be/hjNWsqLAPv4?si=vK1P9O2mjwaw6MPC&t=533">
                                <q cite="https://youtu.be/hjNWsqLAPv4?si=vK1P9O2mjwaw6MPC&t=533">
                                    {$i18n.t('page.footer.credits.motto')}
                                </q>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>


    <p class="t-text-center">
        <p class="t-text-center">
            <small>
                {$i18n.t('page.home.portfolioSourceCode')}
                <a href='https://github.com/jkf16m/jkf16m.github.io'>{$i18n.t('page.home.here')}</a>
            </small>
            <br/>
            <small>
                {$i18n.t('page.footer.madeWith')}
            </small>
        <p class="t-text-center">
            <small>
                v{version}
            </small>
        <p class="t-text-center">
            <small>{$i18n.t('page.footer.copyright')}</small>
    </p>
</footer>