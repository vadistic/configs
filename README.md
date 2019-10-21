# @vadistic/utils

Personal @vadistic utils - scaffolding & configs for react & node monorepos with typescript. Inspired by https://github.com/microsoft/just 

## Why

- I kind of like having monorepos of tiny packages for everything
- No config tools like tsdx or cra use their configs, not mine
- Actually it's mostly about dotfiles, can be used with any generator
- I guess I like configs
- Let's test those github package repos

## Idea how to make it more or less sane?

- Packages/Stacks are based on live `./fixtures` that can be easily tested/ updated with yarn etc.
- All of it is auto templatized with [plop](https://github.com/plopjs/plop)
- Monorepo itself can be scafolded with `create-monorepo` from package `@vadistic/scripts`

- Eslint configs are packaged separately since centralising those may be ok solution

## TODO

- [ ] Add some scripts
- [ ] Setup automatic composite typescript compilation (project references based on package.json)
- [ ] Add micro task runner (just ts-node/register with logger and pipe/pararell)
