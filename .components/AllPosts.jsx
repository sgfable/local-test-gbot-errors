import React from 'react'

const getLatestPosts = (manifest) => {
  const latestPosts = []
  const queue = [manifest.tree]

  while (queue.length > 0) {
    const node = queue.shift()

    if (node.nodeType === 'file' && node.ext === '.mdx') {
      latestPosts.push({ ...node.frontmatter, link: node.pathName })
    }

    node.children?.forEach(child => queue.push(child))
  }

  return latestPosts
}

export default function AllPosts(props) {
  const latestPosts = getLatestPosts(props.manifest)
  const borderColor = ['#ff5cc5', '#37b8ff', '#c24ce3', '#ffc901']

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '2rem',
          margin: '1rem auto',
          maxWidth: '1400px',
          flexDirection: 'column',
        }}
      >
        {latestPosts.map(((post, idx) => {
          if (post.link === '/') return <></>
          return (
            <a
              key={idx}
              href={post.link}
              style={{
                padding: '40px',
                backgroundColor: 'white',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                borderBottom: `2px solid ${borderColor[idx % borderColor.length]}`,
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.05)'

              }}
            >
              <img
                src={post.bannerImg}
                style={{
                  borderRadius: '10px',
                  flex: '1',
                  maxHeight: '376px',
                  width: 'auto'
                }}
              />
              <div style={{
                flex: '1',
                height: '100%',
              }}>
                <div style={{ textAlign: 'left', color: '#2c2c2c' }}>
                  <p style={{ color: '#747474' }}>{post.date}</p>
                  <h2>{post.title}</h2>
                  <p>{post.subtitle}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: '#713aff',
                    fontWeight: '500'
                  }}
                >
                  <span>Read more</span>
                  <img
                    src='https://assets.website-files.com/632d5bc037481960cc880d53/633df61bb33515b8f0103b50_Vector.svg'
                  />
                </div>
              </div>
            </a>
          )
        }))}
      </div>
    </div>
  )
}
