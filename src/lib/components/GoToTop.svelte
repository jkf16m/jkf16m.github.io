<script lang="ts">
    const link = ()=>{
        window.location.href = "#";
    }
    let windowScrollY = $state(window.scrollY);
    window.addEventListener('scroll', (e)=>{
        windowScrollY = window.scrollY;
    })
    const dynamicHidden = $derived(windowScrollY === 0 ? 't-hidden' : '');
</script>

<button
class={`t-fixed t-bottom-[1rem] t-right-[1rem] t-opacity-25 hover:t-opacity-100 t-transition-opacity ${dynamicHidden}`}
onclick={link}
>
    Top
</button>