const fs = require('fs');
const S3 = require('./config/S3')
const { S3DOSpacesBucketName, S3DOSpacesFolderName } = require('./config/vars.js');

const watchFolderDirPath = './to_be_uploaded';

const fileList = fs.readdirSync(watchFolderDirPath, 'utf8');

const deleteObjectsParams = {
  Bucket: S3DOSpacesBucketName,
  Key: `${S3DOSpacesFolderName}/message.txt`,
};

S3.deleteObject(deleteObjectsParams, function(error, data) {
  if (error) {
    console.log(error, error.stack);
  } else {
    console.log(data);
  }
});

for(let i = 0; i < fileList.length; i++) {
  const currentFileName = fileList[i];
  const data = fs.readFileSync(`${watchFolderDirPath}/${currentFileName}`);
  console.log(currentFileName);

  /*
  const putObjectParams = {
    ACL: 'public-read-write',
    Body: data,
    Bucket: S3DOSpacesBucketName,
    ContentType: 'binary',
    Key: `${S3DOSpacesFolderName}/${currentFileName}`
  };

  S3.putObject(putObjectParams, function(error, data) {
    if (error) {
      console.log(error, error.stack)
    } else {
      console.log(`File ${i} has been successfully uploaded: `, data);
    }
  });

  const getObjectAclParams = {
    Bucket: S3DOSpacesBucketName,
    Key: `${S3DOSpacesFolderName}/${currentFileName}`
  };

  S3.getObjectAcl(getObjectAclParams, function(error, data) {
    if (error) {
      console.log(error, error.stack);
    } else {
      console.log(data);
    }
  });

  const deleteObjectsParams = {
    Bucket: S3DOSpacesBucketName,
    Key: `${S3DOSpacesFolderName}/${currentFileName}`
  };

  S3.deleteObject(deleteObjectsParams, function(error, data) {
    if (error) {
      console.log(error, error.stack);
    } else {
      console.log(data);
    }
  });

const listObjectsParams = {
  Bucket: S3DOSpacesBucketName,
  MaxKeys: 10,
  Prefix: 'test-folder',
};

S3.listObjects(listObjectsParams, function(error, data) {
  if (error) {
    console.log(error, error.stack);
  }
  console.log(data);
});
  */
}
