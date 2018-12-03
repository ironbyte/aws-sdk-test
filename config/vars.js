const path = require('path');

require('dotenv-safe').load({
  path: path.join(__dirname, '../.env'),
  sample: path.join(__dirname, '../.env.example'),
});

module.exports = {
  S3DOSpacesAccessKeyID: process.env.S3_DO_SPACES_ACCESS_KEY_ID,
  S3DOSpacesSecretAccessKey: process.env.S3_DO_SPACES_SECRET_ACCESS_KEY,
  S3DOSpacesEndpoint: process.env.S3_DO_SPACES_ENDPOINT,
  S3DOSpacesBucketName: process.env.S3_DO_SPACES_BUCKET_NAME,
  S3DOSpacesFolderName: process.env.S3_DO_SPACES_FOLDER_NAME,
};
