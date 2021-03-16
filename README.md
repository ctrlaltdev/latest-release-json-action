# Latest Release JSON

This action returns the latest release tag provided a list of releases in JSON.

## Inputs

### `releases`

**Required** JSON of GitHub Releases - see ctrlaltdev/get-releases-action output.

### `prefixed`

**Required** If you want the version to be prefixed with `v`. Default: false

## Outputs

### `tag`

The Latest Release Tag.

## Example usage

```yml
uses: ctrlaltdev/latest-release-json-action@latest
with:
  releases: '[...]'
```
