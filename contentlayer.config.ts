import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const About = defineDocumentType(() => ({
    name: 'About',
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        lang: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/")[0],
        },
    },
}))

export default makeSource({ contentDirPath: 'content/about', documentTypes: [About] })