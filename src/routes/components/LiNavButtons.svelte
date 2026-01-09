<script lang="ts">
    import { i18n } from "$lib/localization.svelte";
</script>

<li><a href="/">{$i18n.t('page.home.nav')}</a></li>
<li><a href="#about">{$i18n.t('page.about.nav')}</a></li>
<li><a href="#experience">{$i18n.t('page.experience.nav')}</a></li>
<!-- <li><a href="#projects">{$i18n.t('page.projects.nav')}</a></li> -->
<li><a href="#contact-me">{$i18n.t('page.contact.nav')}</a></li>