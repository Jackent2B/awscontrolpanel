
![](https://github.com/Jackent2B/awscontrolpanel/blob/main/awscontrolpanel.png?raw=true)

# awscontrolpanel
Customised AWS Control Panel with great UI Experience
## Docker Image Link

Frontend: [Docker Image](https://hub.docker.com/repository/docker/jackent2binnovaccer/awscontrolpanel-reactjs)
Backend: [Docker Image](https://hub.docker.com/repository/docker/jackent2binnovaccer/awscontrolpanel-nodejs)

## Github Link

Project Link: [Code](https://github.com/Jackent2B/awscontrolpanel.git)



### Built With

Following are the frameworks/libraries that you need to install in your local machine to run the project: 

* [Node.js](https://nodejs.org/en/)
* [AWS SDKs](https://aws.amazon.com/tools/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)


<!-- GETTING STARTED -->
## Getting Started

Following are the Instructions on setting up your project locally:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
1. npm
  ```
  npm install npm@latest -g
  ```
2.  git config username
  ```
  git config --global user.name "username"
  ```
3.  git config email
  ```
  git config --global user.email "user@mail.com"
  ```

### Installation
1. Clone the repo
   ```
   git clone https://github.com/Jackent2B/awscontrolpanel.git
   ```
2. Now, Switch to the Backend folder and Install NPM packages
   ```
   npm install
   ```
3. Now, Switch to the Frontend folder and Install NPM packages
   ```
   npm install
   ```      
   

### Services Added

* EC2 Services:

  * Create EC2 Instance (/ec2/setInstance)
  * Show EC2 Instance List (/ec2/getInstances)
  * Start EC2 Instance (/ec2/startInstance)
  * Stop EC2 Instance (/ec2/stopInstance)
  * Terminate EC2 Instance (/ec2/terminateInstance)

* S3 Services: 
  
  * Create S3 Bucket (/s3/setBucket)
  * Show S3 Buckets (/s3/getBuckets)
  * Delete S3 Bucket (/s3/removeBucket)

* IAM Services:

  * Create IAM User (/iam/setIAMUser)
  * Show IAM Users  (/iam/getIAMUsers)


### Running the application
Switch to the cloned repository using your terminal


1. Run Node.js (Backend) server 
   ```
   npm start
   ```
Now, Switch on to the client folder in the second window of terminal,<br/>

2. Run React.js (Frontend) client 
   ```
   npm start
   ```
