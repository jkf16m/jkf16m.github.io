<script lang="ts">
	import type { Size } from "./Icon.svelte";
    import RegisteredIcon, { type AvailableIcons, type Props as RegisteredIconProps } from "./RegisteredIcon.svelte";
    type Props = {
        names: Array<AvailableIcons>;
        inline?: boolean;
        size: Size;
    };
    let p: Props = $props();
</script>

{#each p.names as name}
    <RegisteredIcon
    inline={p.inline??false}
    size={p.size}
    name={name}
    />
{/each}