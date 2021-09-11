const wrapper = document.querySelector('.wrapper')
const neck = document.querySelector('.neck')
const fuckEl = document.querySelector('#fucks')
const lengthEl = document.querySelector('#length')

let fucks = 0

document.querySelector('.print').addEventListener('click', () => {
  window.print()
})

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        injectNeck(entry)
    }
  });
}, {});

function injectNeck(entry) {

    observer.unobserve(entry.target)
    const clonedNeck = neck.cloneNode(true)
    wrapper.appendChild(clonedNeck) 
    observer.observe(clonedNeck) 

    injectFuck()
}

function injectFuck() {
   fucks++;
   fuckEl.innerText = fucks;

  const newFuck = document.createElement('div')
  newFuck.className = 'textfuck'
  newFuck.innerText = 'fuck you'
  newFuck.style.left = Math.random() * window.innerWidth - 200 + 'px'
  newFuck.style.top = wrapper.offsetHeight - 200 + 'px'
  document.body.appendChild(newFuck)
}

observer.observe(neck)

