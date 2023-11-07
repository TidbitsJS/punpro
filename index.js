import { getContentBySlug } from "./script/getContent.js";
import { generateCurriculumStructure } from "./script/getStructure.js";

function sayHello() {
    console.log("Hello from PunPro")
}

generateCurriculumStructure()
    .then((curriculumStructure) => {
        console.log(JSON.stringify(curriculumStructure, null, 2));
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });

// Example usage: Replace 'section-slug' and 'lecture-slug' with the actual slugs
// const sectionSlug = '001_getting-started';
// const lectureSlug = '001_introduction';

// getContentBySlug("./content", sectionSlug, lectureSlug)
//     .then((content) => {
//         if (content) {
//             console.log(JSON.stringify(content, null, 2));
//         } else {
//             console.log('Content not found.');
//         }
//     })
//     .catch((error) => {
//         console.error(`Error: ${error}`);
//     });

export {
    sayHello,
    getContentBySlug,
    generateCurriculumStructure
}
