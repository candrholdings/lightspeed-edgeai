const fs = require('fs');
const fetch = require('node-fetch');

const deviceEndpoint = 'https://studio.cnr.ai';
const pipelineId = 'd4d696e8-6fd1-4ffe-855e-7deef70c26d4';
const blockId = '5a4d0c0b-119d-4b59-ad17-9b9437f71939';
const edgeAiKey = '06312254-0469-44fa-b7b1-bcbc39c15182';
const file = fs.readFileSync('data/kitchen.png');

(async () => {
  const res = await fetch(`${deviceEndpoint}/api/v1/pipeline/${pipelineId}/${blockId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-edgeai-key': edgeAiKey,
    },
    body: JSON.stringify({
      dataUrl: `data:image/png;base64,${file.toString('base64')}`,
    }),
  });

  console.log(await res.json());
})();
