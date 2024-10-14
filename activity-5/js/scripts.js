var data = [
    {
        name: 'Path Intellisense',
        description: 'Visual Studio Code plugin that auto completes filenames.',
        author: 'Christian Kohler',
        url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
        downloads: 14178710,
        stars: 121,
        price: 'free',
        selector: 'p1'
    },
    {
        name: 'Open in Browser',
        description: 'This allows you to open the current file in your default browser or application.',
        author: 'TechER',
        url: 'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser',
        downloads: 10718774,
        stars: 89,
        price: 'free',
        selector: 'p2'
    }
];

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    }
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function(id) {
    return document.getElementById(id);
}

var writePackageInfo = function(package) {
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

var init = function() {
    dateEl =getEl('date');
    dateEl.textContent = getTodaysDate();

    var pathInt = new Package(data[0]);
    writePackageInfo(pathInt);

    var openB = new Package(data[1]);
    writePackageInfo(openB);
}

init();