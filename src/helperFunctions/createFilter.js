export default function createFilter(str) {

    const arr = [];
    const path = str.split("/");
    const filtered = path.filter(item => item !== '');

    return filtered;
}