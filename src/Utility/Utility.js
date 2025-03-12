
const getFromLocalStorage = () => {
    const blogs = localStorage.getItem('blogs');
    if (blogs) {
        return JSON.parse(blogs);
    }
    return [];
}

const saveBlogToLocalStorage = blog => {
    let existing = getFromLocalStorage();
    // console.log('these are the existing on localstorage: ', existing)
    let isExist = false;
    existing.map(storedBlog => {
        if (storedBlog.id === blog.id) {
            isExist = true;
        }
    });
    // console.log('there exist some data on localstorage: ', isExist)
    if (!isExist) {
        existing.push(blog);
    }
    saveAllToLocalStorage(existing);
}

const saveAllToLocalStorage = existing => {
    localStorage.setItem('blogs', JSON.stringify(existing));
}

export {saveBlogToLocalStorage, getFromLocalStorage}