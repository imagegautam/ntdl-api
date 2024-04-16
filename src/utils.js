export const idGenerator = (length = 6) => {
    const str = "qwertyuioplkjhgfdsazxcvbnmZXCVBNMLKJHGFDASQWERTYUIOP"
    let id = ""
    for(let i =0; i<length; i++){
       id += str[Math.floor( Math.random()*str.length)]
    }
    return id;
}