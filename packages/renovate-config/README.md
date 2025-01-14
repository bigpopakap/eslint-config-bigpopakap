@bigpopakap/renovate-config
===========================

Shared [RenovateBot][renovate-config-options] configurations for bigpopakap's personal projects.

# Adding to a new repo

## Installation

Follow the [RenovateBot installation instructions][renovate-installation] to set up the app on Github.

## Configuration

```bash
yarn add -D @bigpopakap/renovate-config
```

Adding the package is as a dependency is not a requirement, since Renovate will pull the configuration package itself. However, it is useful to formally document the dependency.

Add the following `.renovaterc.json` to your project.
```json
{
  "extends": ["@bigpopakap"]
}
```
And and add any other configurations you need specific to that repo.

[renovate-installation]: https://docs.renovatebot.com/
[renovate-config-options]: https://docs.renovatebot.com/configuration-options/
