
<script lang='ts'>
	import type { Props } from "./Project.types";

    let {
        name,
        description,
        role,
        roleLabel,
        date,
        dateLabel,
        usedTechnologies,
        usedTechnologiesLabel,
        projectDetailsLabel,
        duration,
    } : Props = $props();
    
</script>

<h3>{name}</h3>
<p>{duration}</p>
<details>
    <summary>{projectDetailsLabel}</summary>
    <p>{description}</p>
    <ul>
        <li>{dateLabel}: {date}</li>
        <li>{roleLabel}: {role}</li>
        <li>
            {usedTechnologiesLabel}
            <ul>
                {#each usedTechnologies as usedTechnology}
                <li>{usedTechnology}</li>
                {/each}
            </ul>
        </li>
    </ul>
</details>