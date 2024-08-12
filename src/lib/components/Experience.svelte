
<script lang="ts" context="module">
    export type Props = {
        translationKey: string;
        role: string;
        mainTechnology: string;
        usedTechnologies: AvailableIcons[];
        secondaryRole: string;
        remarksCount: number;
    };
</script>

<script lang='ts'>
	import { i18n } from "$lib/localization.svelte";
	import RegisteredIcon from "./RegisteredIcon.svelte";
	import type { AvailableIcons } from "./RegisteredIcon.svelte";

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
                    <RegisteredIcon name={usedTechnology} size={"medium"}/>
                </div>
            {/each}
        </div>
    </footer>
</article>