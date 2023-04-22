console.log("Script works")

uppercase.addEventListener("click", () => {
    console.log("Transforming to UpperCase")
    inpText.value = inpText.value.toUpperCase()
})

lowercase.addEventListener("click" , () =>{
    console.log("Converting to Lower Case")
    inpText.value = inpText.value.toLowerCase()
} )

inpText.addEventListener("input", () =>{
    console.log("Changing the Input")
    charCount.innerText = inpText.value.length
    wordCount.innerText = inpText.value.trim().split(" ").length
})

pointers.addEventListener("click" , () =>{
    console.log("Write the text with double spaces and it will convert in pointers")
    inpText.value = inpText.value.replaceAll(".", "\n")
} )
