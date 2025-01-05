module.exports = { generateSlug };

function generateSlug(title) {
    // Write your code inside this function only.
   if(typeof title !== 'string' || title.trim() === '') return 'Input must of non empty string'
    return `${title.trim().toLowerCase().replaceAll(' ','-')}.com`
}
console.log(generateSlug("Hello World"))           //hello-world.com
console.log(generateSlug(" AlmaBetter Web Dev"))   //almabetter-web-dev.com
console.log(generateSlug(""))                      //Input must of non empty string
console.log(generateSlug())                        //Input must of non empty string
console.log(generateSlug(null))                    //Input must of non empty string