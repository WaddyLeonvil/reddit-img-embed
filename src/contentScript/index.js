const post = document.querySelector('#siteTable .entry form .usertext-body')
const postLinks = post?.querySelectorAll('a')

const comments = document.querySelectorAll('.entry form .usertext-body')

if (postLinks) {
  postLinks.forEach((link) => {
    if (link.textContent.includes('preview.redd')) {
      link.innerHTML = `<img src="${link.href}" />`
    }
  })
}

if (comments) {
  comments.forEach((comment) => {
    if (comment.textContent.includes('<image>')) {
      const imgTags = comment.querySelectorAll('a')
      imgTags.forEach((tag) => {
        tag.innerHTML = `<img src="${tag.href}" style="max-width: 240px; min-width: 20px;" />`
      })
    }
  })
}
