# \_blank
The Git repository for the \_blank project
This repository contains courses and exercises material.
It is contributed to by the teachers of the \_blank project.

## Directory Structure

```
┬
├─ archives : Contains courses from previous years.
├─ cheatsheets : Contains cheatsheets for different modules
├─ corrections : Contains corrections to the exercises.
├─ courses : Contains courses : one folder per module
│  ├─ html :  HTML courses
│  │   └─ lesson1 :  HTML first lesson
│  └─ ...
├─ exercises : Contains exercises : follow the courses directory structure.
├─ includes : Contains general purpose resources for courses (reveal files, style sheets, scripts...)
├─ presentations : Contains general purpose presentations not linked to a specific course.
└─ resources : Contains educational resources.
```


## Development

`npm install` to install development dependencies.
`gulp serve` starts a local server for courses on port _8080_.

Or you can run `python -m SimpleHTTPServer 8080` from the root directory of the project.

See [guidelines for contribution](CONTRIBUTING.MD).

## Licensing

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
<br />
<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">_blank Courses</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://blank.bellevillecitoyenne.fr/" property="cc:attributionName" rel="cc:attributionURL">_blank Team</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Permissions beyond the scope of this license may be available at <a xmlns:cc="http://creativecommons.org/ns#" href="blank@bellevillecitoyenne.fr" rel="cc:morePermissions">blank@bellevillecitoyenne.fr</a>.
