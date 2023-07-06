import React from 'react'
/******* modules ******
 * import {identifier} from 'module-name' => import from node_modules
 * import {identifier} from 'path/module-name' => import from src
 *    path => ./folder or module_nae => start from current folder
 *    path => ../                    => 1 level up
 *
 * import { identifier1 } from 'module
 * import { identifier2 } from 'module
 *
 * import { identifier1, identifier2 } from 'module
 * import { identifier1 as newName, identifier2 } from 'module
 * import default_identifier, { identifier1 as newName, identifier2 } from 'module
 * import { identifier1 as newName, identifier2, default as default_identifier } from 'module
 * import * as all_identifiers from 'module'
 */

// import {showTeacherInfo} from './my-module';
// import {sessionNumber} from './my-module';

import myInstitue, { showTeacherInfo, courseName, sessionNumber } from './my-module'
import BasePage from '../../components/base-page/base-page'

export const ReactModules = () => {
  const teacherInfo = showTeacherInfo()
  return (
    <>
    <BasePage fluid={true} title={'react-module'}>
    <h2>
        Course: {courseName} Session: {sessionNumber}
      </h2>
      <h3>Institue: {myInstitue}</h3>
      <h3>{teacherInfo}</h3>
    </BasePage>
    </>
  )
}
