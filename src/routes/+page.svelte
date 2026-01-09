<script lang='ts'>
    import Experience from "./sections/Experience.svelte";
    import { i18n } from "$lib/localization.svelte";

    import { version } from '$app/environment';
	import Footer from "./sections/Footer/Footer.svelte";
	import Projects from "./sections/Projects.svelte";
</script>

<header>
    <h1>{$i18n.t('page.home.greetings')}</h1>
</header>

<p>{$i18n.t('page.home.welcome')}</p>

<h2 id="about">{$i18n.t('page.about.whoAmI')}</h2>
<p>{$i18n.t('page.about.introduction')}</p>


<Experience/>

<!-- <Projects /> -->

<!--contact me-->
<Footer/>