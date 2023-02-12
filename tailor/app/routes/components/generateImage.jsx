import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";
import CarouselMain from "./carousel";

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
      < CarouselMain/>
      )}

    </div>
  );
}
