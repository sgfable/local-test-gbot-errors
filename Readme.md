## Step to install `fable-doc` CLI tool
1. Clone `docs` repo and checkout `feat-config` branch. [Link here](https://github.com/sharefable/docs/tree/feat-config)
2. Build `fs-ser` package, then build `cli` package using `yarn build` command
3. Run `npm link` command in `cli` package
   
If all has gone well, a symbolic link should be created pointing to the `cli.mjs` file in your globally installed npm packages.
To check whether the symlink has been created, run `npm list -g`, you should see a similar output as shown below
```
+-- @fable-doc/cli@1.0.0 -> .\D:\Fable Internship\Work\docs\packages\cli
```

## Step to use `fable-doc` CLI tool
- The CLI tool comes with 2 commands, viz., `start` and `build`
```
fable-doc start
```
- `start` is similar to `start` command in `create-react-app` wherein it spins up a dev server and watches for changes in your source directory and reloads the project to show the output. This is useful in development

```
fable-doc build
```
- `build` command generates all the static files in a `build` directory in your project folder



