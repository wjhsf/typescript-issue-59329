// This file includes multiple different types of imports. Specifying different
// "module" and "moduleResolution" compiler options will result in different
// imports working (or not). That behavior is expected. But when the "typeRoots"
// compiler option is explicitly set to the default value, the number of
// resolved imports changes. That behavior is unexpected.

import { file } from "pkg"
import { file as index} from "pkg/index"
import { file as indexJs} from "pkg/index.js"
import {file as internal} from "pkg/internal"
import {file as internalJs} from "pkg/internal.js"
import {file as external} from "pkg/external"
import {file as externalJs} from "pkg/external.js"
import {file as exports} from "pkg/exports"
