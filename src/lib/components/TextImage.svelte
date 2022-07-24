<script>
    export let src = ""
    export let classList = ''
</script>

<div class='{classList} mb-4'>
    <div class='columns'>
        <div class='column'>
            <slot />
        </div>
        <div class='column'>
            <img class='image' src='{src != '' ? src : 'https://placekitten.com/400/250'}' />
        </div>
    </div>
</div>

<style>
    img {
        border-radius: 8px;
    }
</style>