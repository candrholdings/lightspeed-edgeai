const fs = require('fs');
const fetch = require('node-fetch');

const deviceEndpoint = 'https://studio.cnr.ai';
const pipelineId = '18fafd6e-f587-4404-b95f-2327f984be81';
const blockId = 'a65a1147-3df3-488d-941e-406f43296456';
const edgeAiKey = '06312254-0469-44fa-b7b1-bcbc39c15182';
const file = fs.readFileSync('data/outdoor.png');

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
