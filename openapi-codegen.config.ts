import { generateSchemaTypes, generateReactQueryComponents, generateFetchers } from '@openapi-codegen/typescript';
import { defineConfig } from '@openapi-codegen/cli';
export default defineConfig({
  visdemo: {
    from: {
      relativePath: 'openapi.yaml',
      source: 'file',
    },
    outputDir: 'libs/visdemo/api/src/lib/openapi',
    to: async (context) => {
      const filenamePrefix = 'visdemo';
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });

      await generateFetchers(context, { filenamePrefix: 'server', schemasFiles });
    },
  },
});
