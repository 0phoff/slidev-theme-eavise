# Release Guide

1. Update version field in `package.json`
1. Stage: `git add package.json`
1. Commit: `git commit -m vX.Y.Z`
1. Create tag: `git tag vX.Y.Z`
1. Push: `git push --atomic origin master vX.Y.Z`


# Release Candidate
By appending `-rcA` to your version and git tag (where `A` is a number), you will publish a release candidate.
This release candidate is then installable by using `pnpm add slidev-theme-eavise@next`.

1. Update version field in `package.json`
1. Stage: `git add package.json`
1. Commit: `git commit -m vX.Y.Z-rcA`
1. Create tag: `git tag vX.Y.Z-rcA`
1. Push: `git push --atomic origin master vX.Y.Z-rcA`