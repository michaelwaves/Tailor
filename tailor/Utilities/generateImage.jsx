import { Configuration, OpenAIApi } from 'openai'
import { useState } from 'react';

const configuration = new Configuration({
  apiKey: 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,
});

const openai = new OpenAIApi(configuration);

const [result, setResult] = useState('')

export default function imageCreator(props) {
    const [prompt, setPrompt] = useState('')
    setPrompt(props.text)

    const createImage = async() => {
        const response = await openai.createImage({
            prompt: {prompt},
            n: 1,
            size: "256x256"
        })
        setResult(response.data.data[0].url)
    }
    
    return (
        <div>
            <img className="generatedImage" src={result} alt="Dall-E generated image"/>
        </div>
    )
}