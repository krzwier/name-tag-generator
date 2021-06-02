import fetch from "node-fetch";

export const randomNames = async () => {
    const res = await fetch("https://randomuser.me/api/?inc=name&results=24");
    const data = await res.json();
    const outputData = [];
    let id = 1;
    for (let item of data.results) {
        outputData[id-1] = {
            "id": id,
            "name": item.name.first
        }
        id++;
    }
    return outputData;

};
