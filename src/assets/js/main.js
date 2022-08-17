let wallpaperCarousel = document.querySelector('#wallpaper-carousel');
let dotContainer = document.querySelector('#dot-container');

let wallpapers = [];
let wallpaperIndex = 1;

// Get Path to Wallpaper
const webpPath = 'assets/images/webp/1080/';
const jpgPath = 'assets/images/jpg/1080/';
const pngPath = 'assets/images/png/1080/';

// Create Picture Element
const displayWallpaper = (src, alt) => {
    // Parent Element
    let picture = document.createElement('picture');
    picture.className = 'fade';
    // Child Element
    let webpSource = document.createElement('source');
    let jpgSource = document.createElement('source');
    let pngSource = document.createElement('source');
    let image = document.createElement('img');
    // Attribute type
    webpSource.type = 'image/webp';
    jpgSource.type = 'image/jpeg';
    pngSource.type = 'image/png';
    // Attribute srcset
    webpSource.srcset = `${webpPath}${src}.webp`;
    jpgSource.srcset = `${jpgPath}${src}.jpg`;
    pngSource.srcset = `${pngPath}${src}.png`;
    // Attribute img
    image.className = 'img-resize';
    image.src = `${webpPath}${src}.webp`;
    image.alt = alt;
    image.loading = "lazy";
    // Append Child Element
    picture.append(webpSource, jpgSource, pngSource, image);
    // Return Picture Element
    return picture;
}

const displayDot = (wallpaperLength) => {
    let dots = [];
    for (let index = 0; index < wallpaperLength; index++) {
        //Create Dot Element
        let dot = document.createElement('span');
        dot.className = 'dot hover';
        dot.addEventListener('click', () => { currentWallpaper(index + 1); });
        dots.push(dot);
    }
    return dots;
}

for (let index = 1; index <= 7; index++) {
    wallpapers.push(displayWallpaper(`image${index}`, `wallpaper${index}`));
}

wallpaperCarousel.append(...wallpapers);
dotContainer.append(...displayDot(wallpapers.length));

function showWallpapers(index) {
    // let i;
    let wallpapers = document.querySelector('#wallpaper-carousel').children;
    let dots = document.querySelector('#dot-container').children;

    if (index > wallpapers.length) { wallpaperIndex = 1 }
    if (index < 1) { wallpaperIndex = wallpapers.length }

    for (let i = 0; i < wallpapers.length; i++) {
        wallpapers[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' dot-active', '');
    }

    wallpapers[wallpaperIndex - 1].style.display = "block";
    dots[wallpaperIndex - 1].className += ' dot-active';
}

showWallpapers(wallpaperIndex);

function currentWallpaper(index) {
    showWallpapers(wallpaperIndex = index);
}

function nextWallpaper(index) {
    showWallpapers(wallpaperIndex += index);
}