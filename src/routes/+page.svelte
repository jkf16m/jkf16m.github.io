<script lang='ts'>
    import Experience from "$lib/components/Experience.svelte";
    import { i18n } from "$lib/localization.svelte";

    const projectTranslationsFallback = (project: string)=>(str: string)=>{
        return $i18n.t(`page.projects.${project}.${str}`, {
            defaults: [{message: str}]
        })
    };

    const pt = (label: string)=>{
        return $i18n.t(`page.components.project.${label}`);
    }
</script>

<header>
    <h1>{$i18n.t('page.home.greetings')}</h1>
</header>

<p>{$i18n.t('page.home.welcome')}</p>

<h2 id="about">{$i18n.t('page.about.whoAmI')}</h2>
<p>{$i18n.t('page.about.introduction')}</p>


<article>
    <header><h2 id="experience">{$i18n.t('page.experience.nav')}</h2></header>
    <Experience
        remarksCount={4}
        translationKey={'pictale'}
        role={'leadDeveloper'}
        secondaryRole={"developer"}
        mainTechnology={'reactNative'}
        usedTechnologies={[
            'javascript', 'nodejs', 'csharp'
        ]}
    />
    <Experience
        remarksCount={3}
        translationKey='ingeniosys'
        secondaryRole="developer"
        role="fullstack"
        mainTechnology="dotnet"
        usedTechnologies={[
            "javascript", "csharp", "aspnet", "jquery"
        ]}
    />
</article>

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