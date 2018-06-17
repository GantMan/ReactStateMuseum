'use strict'
/* jshint expr: true */
const ROOT_PATH = '../'

const bluebird = require('bluebird')
const { getDirectories } = require('./utils')
const { readFile, existsSync } = require('fs')
const path = require('path')
const GITHUB_URL = 'https://github.com/GantMan/ReactStateMuseum'

describe('README.md Tests', function () {
  it('Each example has a README.md', function () {
    return bluebird.props({
      reactDirectories: getDirectories({ path: 'React' }),
      reactNativeDirectories: getDirectories({ path: 'ReactNative' })
    }).then(({
        reactDirectories,
        reactNativeDirectories
    }) => {
      const missingReadmes = []
      for (const reactDirectory of reactDirectories) {

        // const readmePath = `${__dirname}/${ROOT_PATH}React/${reactDirectory}/README.md`
        const readmePath = path.join(__dirname, ROOT_PATH, 'React', reactDirectory, 'README.md')
        if (!existsSync(readmePath)) {
          missingReadmes.push(readmePath)
        }
      }

      for (const reactNativeDirectory of reactNativeDirectories) {
        // const readmePath = `${__dirname}/${ROOT_PATH}ReactNative/${reactNativeDirectory}/README.md`
        const readmePath = path.join(__dirname, ROOT_PATH, 'ReactNative', reactNativeDirectory, 'README.md')

        if (!existsSync(readmePath)) {
          missingReadmes.push(readmePath)
        }
      }

      if (missingReadmes.length > 0) {
        const errorMessage = (
          'The following projects are missing README.md files:' +
          JSON.stringify(missingReadmes) +
          '.'
        )

        throw new Error(errorMessage)
      }
    })
  })

  it('Each folder has a link to it in the readme', function () {
    return bluebird.props({
      readme: getReadme(),
      reactDirectories: getDirectories({ path: 'React' }),
      reactNativeDirectories: getDirectories({ path: 'ReactNative' })
    }).then(({
        readme,
        reactDirectories,
        reactNativeDirectories
      }) => {
      const missingReactLinks = []
      for (const reactDirectory of reactDirectories) {
        const linkToDirectory = (
          `${GITHUB_URL}/tree/master/React/${reactDirectory}`
        )

        if (!readme.includes(linkToDirectory)) {
          missingReactLinks.push(linkToDirectory)
        }
      }

      const missingReactNativeLinks = []
      for (const reactNativeDirectory of reactNativeDirectories) {
        const linkToDirectory = (
          `${GITHUB_URL}/tree/master/` +
          `ReactNative/${reactNativeDirectory}`
        )

        if (!readme.includes(linkToDirectory)) {
          missingReactNativeLinks.push(linkToDirectory)
        }
      }

      if (
        (missingReactLinks.length > 0) ||
        (missingReactNativeLinks.length > 0)
      ) {
        const errorMessage = (
          'Missing React links:' +
          JSON.stringify(missingReactLinks) +
          ', missing React Native links:' +
          JSON.stringify(missingReactNativeLinks) +
          '.'
        )

        throw new Error(errorMessage)
      }
    })
  })
})

// helper functions
const getReadme = () => {
  const readmePath = `${__dirname}/${ROOT_PATH}/README.md`
    return new Promise((resolve, reject) => {
      readFile(readmePath, (err, data) => {
          if (err) {
              return reject(err)
            }
          resolve(data)
        })
    }).then(readmeAsBuffer => {
      const readme = readmeAsBuffer.toString('ascii')
        return readme
    })
};
