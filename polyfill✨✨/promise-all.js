const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolved successfully ✅')
  }, 500)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 Rejected ❌')
  }, 500)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 resolved successfully ✅')
  }, 500)
})

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Promise.all accepts an array'))
    }

    const results = []
    let remaining = promises.length

    if (remaining === 0) return resolve([])

    promises.forEach((p, i) => {
      // ensure p is a promise
      Promise.resolve(p)
        .then(value => {
          results[i] = value
          remaining--
          if (remaining === 0) {
            resolve(results)
          }
        })
        .catch(reject) // reject immediately on any error
    })
  })
}

// ✅ Example usage:
Promise.myAll([p1, p3])
  .then(res => {
    console.log('Promise Succeed :==> ', res)
  })
  .catch(error => {
    console.log('Promise failed :==> ', error)
  })

// ❌ This will reject because p2 rejects
Promise.myAll([p1, p2, p3])
  .then(res => console.log('Success', res))
  .catch(err => console.log('Error', err))
