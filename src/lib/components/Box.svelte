<div class='box'>
    <slot />
</div>

<style>
    @media print {
        div {
            break-inside: avoid;
        }
    }
</style>