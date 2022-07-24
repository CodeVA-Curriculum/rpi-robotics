<script>
    import {base} from '$app/paths';
    import CodeVA from '$lib/assets/CodeVALogo.png'
    import CSTA from '$lib/assets/CSTALogo.png';
    
    let burger = {
        active: false
    }
    function toggleMenu() {
        burger.active = !burger.active;
    }
</script>

<nav class='navbar'>
    <div class='navbar-brand logo'>
        <a class="navbar-item" href="{base}/">
            <img alt="The CodeVA Logo" src="{CodeVA}" height="28">
            <p class='mx-3 heading is-size-5'>+</p>
            <img alt="The CSTA Logo" src="{CSTA}" height="28">
            <h1 class='heading is-size-5 ml-5 mt-1 is-hidden-mobile'>Teaching Networking with Raspberry Pi</h1>
        </a>
        <button on:click={toggleMenu} role="button" class="navbar-burger {burger.active ? 'is-active' : ''}" aria-label="menu" aria-expanded="{burger.active}" data-target="nav-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>
    <div id='nav-menu' class="navbar-menu {burger.active ? 'is-active' : ''}">
        <div class="navbar-end">
            <a class="navbar-item"
                href='{base}/'
            >
                Home
            </a>
            <!-- <a class="navbar-item"
                href='{base}/about'
            >
                About
            </a> -->
            <a class="navbar-item"
                href='{base}/session'
            >
                Session Materials
            </a>
        </div>
    </div>
</nav>
