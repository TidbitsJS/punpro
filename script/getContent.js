import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';

export async function getContentBySlug(contentPath, sectionSlug, lectureSlug) {
    const sectionPath = path.join(contentPath, sectionSlug);
    const lectureFileName = `${lectureSlug}.mdx`;
    const lecturePath = path.join(sectionPath, lectureFileName);

    try {
        const lectureContent = await fs.readFile(lecturePath, 'utf8');
        const lectureData = matter(lectureContent);
        return {
            slug: lectureSlug,
            meta: lectureData.data,
            content: lectureData.content,
        };
    } catch (error) {
        console.error(`Error reading lecture file for ${sectionSlug}/${lectureFileName}: ${error}`);
        return null;
    }
}
