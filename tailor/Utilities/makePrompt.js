function makePrompt(arr) {

    let prompt = "Make me an image of a clothing apparel titled " + arr[0] + " "
    prompt += "with the size " + arr[1] + " "
    if (arr[2]) prompt += "and with the background " + arr[2] + " "
    if (arr[3]) prompt += "and with the style " + arr[3] + " "
    if (arr[4]) prompt += "and with the gendre " + arr[4] + " "
    //if (arr[5]) prompt += "and with the color " + arr[5] + " "
    // Keep adding to the prompt if there are more elements in the array
    // ...
    prompt += "."   

    return prompt
}