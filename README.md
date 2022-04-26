
![](https://github.com/Jackent2B/awscontrolpanel/blob/main/awscontrolpanel.png?raw=true)

# awscontrolpanel
Customised AWS Control Panel with great UI Experience
## Docker Image Link

EC2 Instance Hosted Link: [Host](http://54.82.2.5:3000/)

Frontend: [Docker Image](https://hub.docker.com/repository/docker/jackent2binnovaccer/awscontrolpanelreact)
Backend: [Docker Image](https://hub.docker.com/repository/docker/jackent2binnovaccer/awscontrolpanelnode)

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

### Services Added:

## EC2 Services:

  * Create EC2 Instance (/ec2/setInstance)   
    ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/createinstance.png?raw=true)
  
  * Show EC2 Instance List (/ec2/getInstances)
  ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/instancelist.png?raw=true)

  * Start EC2 Instance (/ec2/startInstance)
  ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/startinstance.png?raw=true)
  
  * Stop EC2 Instance (/ec2/stopInstance) 
  ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/stopinstance.png?raw=true)
  
  * Terminate EC2 Instance (/ec2/terminateInstance)
  ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/terminateinstance.png?raw=true)


## S3 Services: 
  
  * Create S3 Bucket (/s3/setBucket)
  ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/createbucket.png?raw=true)
  
  * Show S3 Buckets (/s3/getBuckets)
  ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/listbuckets.png?raw=true)
  
  * Delete S3 Bucket (/s3/removeBucket)
  ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/deletebucket.png?raw=true)
  
## IAM Services:

  * Create IAM User (/iam/setIAMUser)
  ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/createuser.png?raw=true)
  
  * Show IAM Users  (/iam/getIAMUsers)
  ![](https://github.com/Jackent2B/awscontrolpanel/blob/main/userlist.png?raw=true)
  
 ## Thank You!
