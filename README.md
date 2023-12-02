# [ChEM-H Subtheme](https://github.com/SU-SWS/chem_h_subtheme)
##### Version: 2.x

Changelog: [Changelog.txt](CHANGELOG.txt)

Description
---

The ChEM-H Subtheme is a Stanford sub-theme that works with the Stanford Basic theme. It is installed on the following sites:

https://chemh.stanford.edu

Features
---
Custom masthead
Interesting banner variants
Customized News and People node pages
Customized teasers
Custom search treatment
Custom footer


Configuration
---

Nothing special needed. Install, enable, and set as the default active theme.

Developer
---

If you wish to develop on this theme you will most likely need to compile some new css. Please use the sass structure provided and compile with the sass compiler packaged in this theme. To install:

```
npm install
```
After you've made a change you want to see processed, you can run:
```
npm run publish
```
This will process scss, js, and asset files, preparing them from the src directory to the dist directory.
It will also copy decanter twig templates from node_modules to the dist/templates/decanter directory to be used.

Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this theme. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)
