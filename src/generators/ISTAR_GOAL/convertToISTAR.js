import { parseJSONToIStar } from "./istarElements";

export function convertToIstar(jsonData) {
    const { arrayistaractors, arrayistardependencies } = parseJSONToIStar(jsonData);
    const links = [];

    arrayistaractors.forEach(actor => {
        const actor_activities = actor.nodes;
        actor_activities.forEach(activity => {
            if (activity.type === "istar.Goal") {
                const link = {
                    id: activity.id + "_link",
                    type: "istar.OrRefinementLink",
                    source: activity.id.substring(0, activity.id.indexOf('_goal')),
                    target: activity.id
                };
                links.push(link);
            }
            if (activity.type === "istar.Resource") {
                const link = {
                    id: activity.id + "_link",
                    type: "istar.NeededByLink",
                    source: activity.id,
                    target: activity.id.substring(0, activity.id.indexOf('_res'))
                };
                links.push(link);
            }
        });
    });

    arrayistardependencies.forEach(dependency => {
        if (dependency.type === "istar.Goal") {
            const link = {
                id: dependency.id + "_link",
                type: "istar.DependencyLink",
                source: dependency.id,
                target: dependency.target
            };
            links.push(link);

            const link2 = {
                id: dependency.id + "_link2",
                type: "istar.DependencyLink",
                source: dependency.source,
                target: dependency.id
            };
            links.push(link2);
        }
    });

    const istarstatement = {
        actors: arrayistaractors,
        dependencies: arrayistardependencies,
        orphans: [],
        links: links,
        display: {},
        tool: "pistar.2.1.0",
        istar: "2.0",
        saveDate: new Date().toUTCString(),
        diagram: {
            width: 600,
            height: 300,
            customProperties: {
                Description: ""
            }
        }
    };

    return istarstatement;
}