// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type response = {statusCode: number, json: any};

export default (req: any, res: response) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
