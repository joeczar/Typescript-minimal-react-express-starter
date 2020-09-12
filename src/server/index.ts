import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { sum } from '../core/math';

const buildDir = path.join(process.cwd() + '/build');
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(buildDir));

app.get('/', function (req, res) {
  res.sendFile(path.join(buildDir, 'index.html'));
});
const allowCrossDomain = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
app.use(allowCrossDomain);

app.get('/ping', function (req, res) {
  console.log('/ping');

  res.json(JSON.parse(`${sum(3, 5)}`));
});

const port = 3003;
console.log('checking port', port);
app.listen(port, () => {
  console.log(`Server now listening on port: ${port}`);
});
