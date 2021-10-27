import fetch from 'node-fetch';

const orphanComponents = await fetch("https://herocoders.atlassian.net/rest/api/3/project/IC/components")
    .then(response => response.json())
    .then(json => {
        return json.filter ? json.filter(({lead}) => !lead).map(({name}) => name) : [];

    })
    .catch(() => console.error("Component query error"))
    .then(components => Promise.all(components.map(name => {
        return fetch("https://herocoders.atlassian.net/rest/api/3/search?fields=key&jql=" +
            encodeURIComponent(`project = IC and component="${name}"`))
            .then(response => response.json())
            .then(({total}) => ({name, issues:total}))
            .catch(() => console.error(`Issues search for component ${name} error`));
    })))
;
console.log("Components without lead:");
console.table(orphanComponents);