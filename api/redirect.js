const storage = {}; // same as above or persistent DB

module.exports = async function (context, req) {
  const code = context.bindingData.code;
  const url = storage[code];
  if (url) {
    context.res = {
      status: 302,
      headers: { Location: url }
    };
  } else {
    context.res = { status: 404, body: "Not found" };
  }
};
