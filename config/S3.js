const aws = require('aws-sdk');
const {
  S3DOSpacesAccessKeyID,
  S3DOSpacesSecretAccessKey,
  S3DOSpacesEndpoint
} = require('./vars');

const spacesEndpoint = new aws.Endpoint(S3DOSpacesEndpoint);
const spacesCredentials = {
  accessKeyId: S3DOSpacesAccessKeyID,
  secretAccessKey: S3DOSpacesSecretAccessKey
};

const S3 = new aws.S3({
  endpoint: spacesEndpoint,
  credentials: new aws.Credentials(spacesCredentials)
});

module.exports = S3;
