# [ChEM-H Subtheme](https://github.com/SU-SWS/chem_h_subtheme)
##### Version: 1.0.1

Changelog: [Changelog.txt](CHANGELOG.txt)

Description
---

The ChEM-H Subtheme is a Stanford sub-theme that works with the Stanford Basic theme. This is version 1 of the theme. It is used on the following sites.

https://chemh-cbi.stanford.edu/ (v1)

https://medchem.stanford.edu/ (v1)

https://mskc.stanford.edu/ (v1)

https://proteinengineering.sites.stanford.edu/ (v1)

Features
---
Custom footer design
Favicon
Purple buttons
Variants for teal buttons
Minimal card variant

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
