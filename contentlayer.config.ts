import {defineDocumentType, makeSource} from 'contentlayer2/source-files'

export const About = defineDocumentType(() => ({
    name: 'About',
    filePathPattern: `about/**/*.md`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        lang: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
        },
    },
}))
export const Experience = defineDocumentType(() => ({
    name: 'Experience',
    filePathPattern: `experience/**/*.md`,
    contentType: 'mdx',
    fields: {
        date: { type: 'date', required: true },
        company: {type: 'string', required: true},
        jobTitle: {type: 'string', required: true},
        timeFrame: {type: 'string', required: true},
        techStack: {
            type: 'list',
            of: {type: 'string'},
            required: false
        }
    },
    computedFields: {
        lang: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
        },
    },
}))
export default makeSource({contentDirPath: './content', documentTypes: [About, Experience]})