const code = ['js', 'py', 'html', 'css', 'c++']

code.forEach( function (item) {
    console.log(item);
    
} )

code.forEach( (item) => {
    console.log(item);
    
})

function printMe(item){
    console.log(item);
    
}

code.forEach(printMe)

code.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})


const coding = [

    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    }

]

coding.forEach( (item) => {
    console.log(item.languageName);
    
})