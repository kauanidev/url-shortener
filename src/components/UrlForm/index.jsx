import {
  InputContainer,
  ShortUrlContainer,
  SubmitButton,
  UrlFormContainer,
  UrlInput,
} from "./styles";

import { MdFileCopy } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

export function UrlForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  function onChangeUrl(event) {
    setLongUrl(event.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();

    const response = await axios.post(
      "https://shrtlnk.dev/api/v2/link",
      {
        url: longUrl,
      },
      {
        headers: {
          "api-key": import.meta.env.VITE_API_KEY,
        },
      }
    );
    setShortUrl(response.data.shrtlnk);
    setLongUrl("");
  }

  function copyUrl() {
    navigator.clipboard.writeText(shortUrl);
    window.alert("URL curta copiada com sucesso.");
  }

  return (
    <UrlFormContainer>
      <h1>Nunca foi tão fácil encurtar uma URL</h1>
      <InputContainer onSubmit={onSubmit}>
        <UrlInput
          onChange={onChangeUrl}
          value={longUrl}
          placeholder="Coloque aqui sua URL"
        />
        <SubmitButton type="submit">Encurtar</SubmitButton>
      </InputContainer>
      {shortUrl && (
        <ShortUrlContainer>
          <h2>{shortUrl}</h2>
          <MdFileCopy onClick={copyUrl} />
        </ShortUrlContainer>
      )}
    </UrlFormContainer>
  );
}
