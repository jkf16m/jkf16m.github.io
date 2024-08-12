<script lang="ts"> 
    import "@picocss/pico/css/pico.jade.min.css";
    import { i18n, language } from "$lib/localization.svelte";

    let languageBinding = $state($language);
    let { children } = $props();
    $effect(()=>{
        $language = languageBinding;
    })
</script>
<main class="container-fluid">
    <nav>
        <ul>
            <li><strong>{$i18n.t('page.title')}</strong></li>
        </ul>
        <ul>
            <li><a href="/">{$i18n.t('page.home.nav')}</a></li>
            <li><a href="#about">{$i18n.t('page.about.nav')}</a></li>
            <li><a href="#experience">{$i18n.t('page.experience.nav')}</a></li>
            <li><a href="#projects">{$i18n.t('page.projects.nav')}</a></li>
            <li><a href="#contact-me">{$i18n.t('page.contact.nav')}</a></li>
            <li>
                <select bind:value={languageBinding}>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </li>
        </ul>
    </nav>
    <article>
        {@render children()}
    </article>
</main>