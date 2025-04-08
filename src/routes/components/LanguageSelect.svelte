<script lang="ts" module>
    export type Props = {
        value: string;
    };
</script>
<script lang="ts">
    let {value=$bindable()}: Props = $props();
</script>

<select bind:value={value}>
    <option value="es">Español</option>
    <option value="en">English</option>
</select>