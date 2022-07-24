<script>
    import Image from 'svelte-image'
    export let src, alt, width, height
    import {base} from '$app/paths'

    // $: if(typeof(src) == typeof('string')) {
    //     if (!src.includes('http')) {
    //         src = base + src
    //     }
    // }
</script>

<img src={src} alt={alt} width={width} height={height} />