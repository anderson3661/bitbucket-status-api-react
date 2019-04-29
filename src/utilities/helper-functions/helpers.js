export const goToTopOfPage = () => {
    window.scrollTo(0, 0);
}

export const deepClone = (objectOrArrayToDeepClone) => {
    return JSON.parse(JSON.stringify(objectOrArrayToDeepClone));
}

export const scrollDiv = (div) => {
    if (div) div.scrollTop = div.scrollHeight - div.clientHeight;
}

export const getPositionInArrayOfObjects = (array, objectProperty, objectValue) => {
    let i = 0;
    let len;

    for (i = 0, len = array.length; i < len; i++) {
        if (array[i][objectProperty] === objectValue) return i;
    }
    return -1;
}

export const doesObjectHaveAnyProperties = (object) => {
    return Object.keys(object).length > 0;
}

export const getObjectKey = (object) => {
    return Object.keys(object)[0];
}

export const hasObjectValueChanged = (originalObject, updatedObject, key) => {
    return originalObject[key] !== updatedObject[key];
}

export const haveObjectValuesChanged = (originalObject, updatedObject, key) => {
    // This is the same function as in settings-helpers (function = haveSettingsFactorsValuesChanged) so refactor
    let anyChanges = false;
    const originalValues = originalObject[key];
    const updatedValues = updatedObject[key];
    Object.entries(originalValues).forEach(([key, val]) => {
        if (val !== updatedValues[key]) anyChanges = true;
    });
    return anyChanges;
};

export const formatDate = (dateOfFixtures) => {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let date = new Date(dateOfFixtures);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    // let year = date.getFullYear();
    let sDaySuffix;

    if (day === 1 || day === 21 || day === 31) {
        sDaySuffix = "st";
    } else if (day === 2 || day === 22) {
        sDaySuffix = "nd";
    } else if (day === 3 || day === 23) {
        sDaySuffix = "rd";
    } else {
        sDaySuffix = "th";
    }

    return dateOfFixtures.substr(0, 4) + day + sDaySuffix + ' ' + monthNames[monthIndex];
}

export const getFormattedDate = (date) => {
    const d = new Date(date);
    return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}