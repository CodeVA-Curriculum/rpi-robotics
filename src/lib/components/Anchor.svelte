<script>
    import {base} from '$app/paths'
    import {onMount} from 'svelte'
    export let href = ""

    // onMount(function () {
    //     if(typeof(href) == typeof('string')) {
    //         if (!href.includes('http')) {
    //             href = base + href
    //         }
    //     }
    // })
</script>

<a href="{href}"><slot /></a>