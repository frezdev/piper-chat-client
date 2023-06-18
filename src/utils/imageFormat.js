export function imageExpoFormat (uri) {
  const filename = uri.split('/').at(-1)

  const match = /\.(\w+)$/.exec(filename)
  const type = match ? `image/${match[1]}` : 'image'

  return { uri, name: `${Date.now()}-${filename}`, type }
}
