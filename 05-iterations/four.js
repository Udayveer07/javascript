// FOR IN loop

const myObject = {
    js : 'javascript',
    html : 'Hyper text Markup language',
    py : 'python',
    rb : 'ruby'
}


// for in loop used on an object
for (const key in myObject) {
   console.log(key, '-' , myObject[key]);
   
}



// for in loop used on an Array

const prg = ['js', 'py', 'html', 'css', 'c++']

for (const key in prg) {
    console.log(prg[key]);
}
