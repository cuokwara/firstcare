


export function createPageUrl(pageName: string) {
    // Handle special cases for website navigation
    if (pageName === 'Home') {
        return '/';
    }
    return '/' + pageName.replace(/([A-Z])/g, (match, letter, index) => {
        return index > 0 ? '-' + letter.toLowerCase() : letter.toLowerCase();
    });
}