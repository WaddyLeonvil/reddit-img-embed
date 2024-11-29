const post = document.querySelector('#siteTable .entry form .usertext-body')
const postLinks = post?.querySelectorAll('a')

const comments = document.querySelectorAll('.entry form .usertext-body')

const spoilerPost = document.querySelector('.expando.expando--with-interstitial')
const spoilerFilters = document.querySelectorAll('.expando-gate--spoiler.expando-gate--overlay')
const spoilerButtons = document.querySelectorAll('button.expando-gate__show-once')

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

if (spoilerPost && spoilerFilters && spoilerButtons) {
  spoilerButtons.forEach((btn) => {
    spoilerPost.addEventListener('click', removeSpoilerFilter)
  })
}

function removeSpoilerFilter() {
  spoilerPost.classList.remove('expando--with-interstitial')

  spoilerFilters.forEach((filter) => {
    filter.remove()
  })
}
