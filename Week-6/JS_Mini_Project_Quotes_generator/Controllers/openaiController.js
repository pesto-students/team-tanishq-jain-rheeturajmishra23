const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateQuotes = async (req,res) => {;
    const {topic} = req.body
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write 5 quotes on ${topic}.`,
            n: 1,
            max_tokens:125,
            temperature:0.6,
        });
        res.status(200).json({
            success: true,
            data:response.data
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
        res.status(400).json({
            success: false,
            error: 'the quotes cannot be generated'
        });
    } 
};

module.exports = { generateQuotes };