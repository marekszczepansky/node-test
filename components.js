import fetch from 'node-fetch';

const orphanComponents = await fetch("https://herocoders.atlassian.net/rest/api/3/project/IC/components")
    .then(response => response.json())
    .then(json => json.filter ? json.filter(({lead}) => !lead).map(({name}) => name) : [])
    .then(components => Promise.all(components.map(name =>
        fetch("https://herocoders.atlassian.net/rest/api/3/search?&maxResults=0&jql=" +
            encodeURIComponent(`project = IC and component="${name}"`))
            .then(response => response.json())
            .then(({total}) => ({name, issues: total})))))
    .catch(() => console.error("Component query error"));

if (orphanComponents) {
    console.log("Components without lead:");
    console.table(orphanComponents);
}
