const { v4: uuidv4 } = require('uuid');
const storage = {}; // Replace with Azure Table Storage or Cosmos later

module.exports = async function (context, req) {
  const url = req.body?.url;
  if (!url) {
    context.res = { status: 400, body: "Missing URL" };
    return;
  }
  const code = uuidv4().slice(0, 6);
  storage[code] = url;
  context.res = { body: { code } };
};
