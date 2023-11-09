import { base_url, getChatBotNameApiEndPoint } from "../apiengine/ApiEndPoints";

const responseofChatBotName = async () => {
  const responseBotName = await fetch(
    `${base_url}${getChatBotNameApiEndPoint}`
  );
  const responseBotNameJson = await responseBotName.json();
  return responseBotNameJson;
};

export default responseofChatBotName;
