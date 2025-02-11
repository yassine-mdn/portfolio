import {defineDocumentType, defineNestedType, makeSource} from 'contentlayer2/source-files'

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
    filePathPattern: `experiences/**/*.md`,
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
const Link = defineNestedType(() => ({
    name: 'Link',
    fields: {
        label: {type: 'string', required: true},
        url: {type: 'string', required: true},
    }
}))
export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/**/*.md`,
    contentType: 'mdx',
    fields: {
        date: { type: 'date', required: true },
        title: { type: 'string', required: true },
        demo: { type: 'string', required: false },
        links: {
            type: 'list',
            of: Link,
            required: false
        },
        featured: {type: 'boolean', default: false},
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
export default makeSource({contentDirPath: './content', documentTypes: [About, Experience,Project]})