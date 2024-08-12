<script lang='ts'>
    import Project from "$lib/components/Project.svelte";
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
    <header><h2 id="projects">{$i18n.t('page.projects.nav')}</h2></header>
    <Project
        projectDetailsLabel={$i18n.t('components.project.details')}
        duration={$i18n.t('page.projects.pictale.duration')}
        dateLabel={$i18n.t('components.project.date')}
        date={'2023-07 2024-10'}
        name='Pictale'
        description={$i18n.t('page.projects.pictale.description')}
        roleLabel={$i18n.t('components.project.role')}
        role={$i18n.t('components.project.roles.architect')}
        usedTechnologiesLabel={$i18n.t('components.project.usedTechnologies')}
        usedTechnologies={[
            'javascript', 'nodejs', 'csharp', 'react-native'
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