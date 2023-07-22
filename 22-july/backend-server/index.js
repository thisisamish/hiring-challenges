const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/numbers", async (req, res) => {
  try {
    let urls = req.query.url;

    if (!urls) {
      return res
        .status(400)
        .json({ error: "'url' query parameter must be provided as an array" });
    }

    // If urls is only a single string then we need to convert it to an array
    if (!Array.isArray(urls)) {
      const temp = urls;
      urls = [];
      urls.push(temp);
    }

    const responseData = await Promise.all(urls.map((url) => axios.get(url)));

    const compiledData = responseData.map((response) => response.data);
    const temp = [];
    compiledData.forEach((arr) => temp.push(...arr.numbers));
    result = [...new Set(temp)];
    result.sort((a, b) => a - b);

    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error fetching data from the URLs" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
