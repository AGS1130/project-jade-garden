import { build } from "obuild";

export default build({
  entries: [
    {
      input: "./src/index.ts",
      outDir: "dist",
      type: "bundle",
      minify: false,
      dts: true
    }
  ]
});
