# @vadisitc/pika-plugin-publish-config

> Pika plugin for private / publishConfig package.json fields

## What it does

With @pika only `pkg` dir should be published.

1. Set `"private": true` in `package.json` - to prevent accidental publishing of wrong directory.

2. Add "publishConfig": {"access": "public"} - with aditional fields like "registry configurable via options

## Installation

```sh
$ yarn add -D @vadistic/pika-plugin-publish-config

```

## Usage

```json
"@pika/pack": {
    "pipeline": [
      [
        "@pika/plugin-standard-pkg",
      ],
      [
        "@vadistic/pika-plugin-publishConfig",
        {
          // use eg. github registry
          "registry": "https://npm.pkg.github.com"
        }
      ],
    ]
  }
```
