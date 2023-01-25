const URLactual = window.location.pathname;

if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/HlmzvqX.png';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/bolsas') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/HlmzvqX.png';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/bolsas/_DisplayType_G' || URLactual == '/bolsas') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/Hlmzest.png';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/sillas') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/Hlmzest.png';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/sillas/_DisplayType_G' || URLactual == '/sillas') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}