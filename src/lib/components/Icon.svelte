<script lang="ts" context="module">
    export type Size = "small"|"medium"|"big";
    export type Props = {
        label?: string;
        iconClasses?: string;
        link?: string;
        size: Size;
    };
</script>
<script lang="ts">
    let props: Props = $props();

    const goToSite = props.link ? 
    ()=>{
        if(props.link){
            window.open(props.link);
        }
    } : ()=>{};
</script>


<div tabindex="0"
role="link"
onkeydown={goToSite}
onclick={goToSite}
class={`t-flex t-flex-col t-justify-center t-w-full t-h-full ${props.link ? 't-cursor-pointer' : ''}`}>
    {#if props.iconClasses}
        <i class={`t-text-center ${props.iconClasses} ${props.size}`}></i>
    {/if}
    {#if props.label}
        <span class="t-text-center ">{props.label}</span>
    {/if}
</div>

<style>
    .text-center{
        text-align: center;
    }
    .small{
        font-size: 1rem;
    }
    .medium{
        font-size: 2rem;
    }
    .big{
        font-size: 3rem;
    }
</style>