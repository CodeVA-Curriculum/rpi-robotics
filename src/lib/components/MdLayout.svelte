<script context='module'>
    import TextImage from '$lib/components/TextImage.svelte'
    import Anchor from './Anchor.svelte';
    import Box from './Box.svelte'
    import Image from './Image.svelte'

    const textimage = TextImage
    const a = Anchor
    const box = Box
    const img = Image

    export {textimage, a, box, img}
</script>

<script>
    import Nav from '$lib/components/Nav.svelte';
</script>

<div class='nav'>
<Nav />
</div>
<div class='section content'>
    <div class='container'>
    <slot />
</div>
</div>

<style>
    @media print {
        .nav {
            display: none;
        }
            div {
        break-inside: avoid;
    }
    }
</style>