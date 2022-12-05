const fs = require('fs');
const fetch = require('node-fetch');

const deviceEndpoint = 'https://studio.cnr.ai';
const pipelineId = '278b0454-0dd2-44dd-8a6d-1a3417493b61';
const blockId = 'e1a2cf45-d696-4b25-b852-a97b53c96178';
const edgeAiKey = '06312254-0469-44fa-b7b1-bcbc39c15182';
const file = fs.readFileSync('data/object.png');

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
