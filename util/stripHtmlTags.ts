const tagsToRemove = ['<p>', '<b>', '<br>']
for (const tag of [...tagsToRemove]) {
    const endTag = tag.replace('<', '</')
    tagsToRemove.push(endTag)
    tagsToRemove.push(endTag.toUpperCase())
    tagsToRemove.push(tag.toUpperCase())
}

export default (text?: string): string => {
    if (!text) return ''
    let replaced = text.slice()
    for (const tag of tagsToRemove) {
        replaced = replaced.replaceAll(tag, '')
    }
    return replaced
}