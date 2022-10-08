export const getLocalStorageState = () => {
    try {
        const localState = localStorage.getItem('state');
        if (localState) {
            return JSON.parse(localState);
        }
        return undefined;
    } catch (error) {
        return undefined;
    }
};

export const setLocalStorageState = state => {
    try {
        const localState = JSON.stringify(state);
        localStorage.setItem('state', localState);
    } catch (err) {
        console.log('There war an error while saving the store');
    }
};
