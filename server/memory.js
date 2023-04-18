module.exports = new Map();


// const responseFn = (res) => (code, data, type = 'application/json') => {
//   const result = type === 'application/json' ? JSON.stringify(data) : data;
//   res.writeHead(code, {
//     'Content-Type': 'type',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//   });
//   res.end(result);
// }