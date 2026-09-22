const getData = () => {
    const gotdata = localStorage.getItem('installdata');

    if (!gotdata) {
        return [];
    }

    return JSON.parse(gotdata);
   
};

const setdata = (id) => {
    const normalizedId = String(id);
    const stringData = getData();
    const alreadyInstalled = stringData.includes(normalizedId);

    if (!alreadyInstalled) {
        const setValue = [...stringData, normalizedId];
        localStorage.setItem('installdata', JSON.stringify(setValue));
    }
};

const removedata =(id)=> {
    const stringid = String(id);
    const stringData = getData();
    const updateddata = stringData.filter((item)=>item!==stringid)
    localStorage.setItem('installdata', JSON.stringify(updateddata))
}
export { getData, setdata, removedata };