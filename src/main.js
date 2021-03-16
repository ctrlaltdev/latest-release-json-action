const core = require('@actions/core')

const getLatestTag = (tags) => {
  const h = {}

  for (let i = 0; i < tags.length; i++) {
    const [_, major, minor, patch] = tags[i].match(/^v?(\d+)\.(\d+)\.(\d+)$/)

    if (!h[major]) h[major] = {}
    if (!h[major][minor]) h[major][minor] = {}
    h[major][minor][patch] = `${major}.${minor}.${patch}`
  }

  const fmajor = Math.max(...Object.keys(h))
  const fminor = Math.max(...Object.keys(h[fmajor]))
  const fpatch = Math.max(...Object.keys(h[fmajor][fminor]))

  return h[fmajor][fminor][fpatch]
}

async function main () {
  try {
    const releases = JSON.parse(core.getInput('releases')).map(e => e.tag_name)
    const prefixed = core.getInput('prefixed') === 'true'

    const tag = getLatestTag(releases)

    core.setOutput('tag', prefixed ? `v${tag}` : tag)
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
