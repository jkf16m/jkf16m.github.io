
<script lang='ts'>
	import type { Props } from "./Experience.types";
    import { i18n } from "$lib/localization.svelte";

    let {
        role,
        mainTechnology,
        usedTechnologies,
        secondaryRole,
        remarksCount,
        translationKey,
    } : Props = $props();

    let remarks = Array.from({length: remarksCount}, (_, i) => i + 1)

    
    const t = (str: string)=>$i18n.t(`components.project.${str}`);
    const experience_t = (str: string)=>$i18n.t(`page.experience.${translationKey}.${str}`);

    const capitalize = (str: string)=>str.charAt(0).toUpperCase() + str.slice(1);
    
</script>
<article>
    <header>
        <h3>{capitalize(t(`roles.${secondaryRole}`))} {$i18n.t('words.in')} {experience_t('name')}, {t(`roles.${role}`)} {t(`technologies.${mainTechnology}`)}</h3>
        <h4>{experience_t('duration')}</h4>
    </header>
    <details>
        <summary>{t('remarks')}</summary>
        <p>{experience_t('description')}</p>
        <ul>
            {#each remarks as remark}
            <li>{$i18n.t(`page.experience.${translationKey}.remark.${remark}`)}</li>
            {/each}
        </ul>
    </details>
    <footer>
        <div class="grid">
            {#each usedTechnologies as usedTechnology}
                <div>
                    {#if usedTechnology[1]}
                        <i class={`icon-size ${usedTechnology[1]}`}></i>
                    {/if}
                    {#if usedTechnology[0]}
                        <div>{t(`technologies.${usedTechnology[0]}`)}</div>
                    {/if}
                </div>
            {/each}
        </div>
    </footer>
</article>

<style>
    .icon-size{
        font-size: 2rem;
    }
</style>