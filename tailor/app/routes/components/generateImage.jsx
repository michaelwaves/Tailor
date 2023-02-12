import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default function ImageCreator({ title }) {
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    openai
      .createImage({
        prompt: title,
        n: 3,
        size: "256x256",
      })
      .then((res) => {
        setResult(res.data.data);
      });
  }, [title]);

  return (
    <div>
      {result && (
        <img
          className="generatedImage"
          src={result[0].url}
          alt="Dall-E generated image"
        />
      )}
    </div>
  );
}
