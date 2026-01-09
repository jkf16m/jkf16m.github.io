<script lang="ts" module>
    export type ImagesProps = {
        images: Image[];
    };

    export type Image = {
        src: string;
        shortDescription: string;
        description: string;
    };
</script>

<script lang="ts">

    let props: ImagesProps = $props();

    const handleOpenImage = (image: Image)=>{

    }
</script>

<div class="t-grid t-grid-cols-2 t-gap-4 t-max-w-sm">
    {#each props.images as image}
        <button type="button" class="t-aspect-square t-overflow-hidden t-w-full t-h-full" onclick={() => handleOpenImage(image)}>
            <img class="t-object-cover t-w-full t-h-full" src={image.src} alt={image.shortDescription}/>
        </button>
    {/each}
</div>
