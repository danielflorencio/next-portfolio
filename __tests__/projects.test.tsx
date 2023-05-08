import { render } from "@testing-library/react";
import Projects from "../src/components/Projects";
import { projects } from "../src/data/projects";


// test('there are 3 projects or more.', () => {
//     if(projects.length < 3){ 
//         test.failing
//     }
// })

test('Projects section rendered.', () => {
    render(<Projects/>)
})
test('Projects have no "HTML" or "CSS" listed as skills.', () => {
    let isThereAnHtmlOrCssItem: boolean = false
    for(let i = 0; i < projects.length; i++){
        for(let n = 0; n < projects[i].skills.length; n++){
            if (projects[i].skills[n].toLowerCase() === 'html' || projects[i].skills[n].toLowerCase() === 'css'){
                isThereAnHtmlOrCssItem = true   
            }
        }
    }
    expect(isThereAnHtmlOrCssItem).toBe(false);
})