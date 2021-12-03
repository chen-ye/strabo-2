import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';
import $RefParser from "@apidevtools/json-schema-ref-parser";
import * as yaml from 'js-yaml';

(async () => {
  const filename = fileURLToPath(import.meta.url);
  // const bundledSchema = await $RefParser.bundle(
  //   path.join(filename, '../../public/strava-openapi/swagger.yaml')
  // );
  const bundledSchema = await $RefParser.dereference(
    path.join(filename, '../../public/strava-openapi/swagger.yaml')
  );
  await fs.writeFile(
    path.join(filename, '../../public/strava-openapi/swagger-bundled.yaml'),
    yaml.dump(bundledSchema)
  );
})();
