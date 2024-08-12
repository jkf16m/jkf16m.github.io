<script lang="ts"> 
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import "font-mfizz/dist/font-mfizz.css";
    import "../app.css";
    import { i18n, language } from "$lib/localization.svelte";
	import NavButtons from "$lib/components/NavButtons.svelte";
    import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import GoToTop from "$lib/components/GoToTop.svelte";

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
        <ul class="t-hidden xl:t-block">
            <NavButtons/>
            <li>
                <LanguageSelect bind:value={languageBinding}/>
            </li>
        </ul>
    </nav>
    <aside class="t-block xl:t-hidden">
        <nav>
            <li>
                <LanguageSelect bind:value={languageBinding}/>
            </li>
            <ul>
                <NavButtons/>
            </ul>
        </nav>
    </aside>

    <article>
        {@render children()}
    </article>
    <GoToTop/>
</main>