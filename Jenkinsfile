pipeline {
    agent any

    environment{
            AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID') // Refer to Jenkins credentials
            AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
            S3_BUCKET_NAME = 'devsum-portfolio'
            S3_BUCKET_REGION = 'ap-south-1'
    }

    stages{
        stage('Install'){
            steps{
                sh 'yarn install'
            }
        }
        stage('Build'){
            steps{
                sh 'yarn build'
            }
        }
        stage('Deploy'){
            script {
                   sh """
                   aws s3 sync ./build s3://$S3_BUCKET_NAME --region $S3_BUCKET_REGION --delete
                   """
               }
        }
        post {
                success {
                    echo 'Deployment to S3 successful!'
                }
                failure {
                    echo 'Deployment to S3 failed.'
                }
        }
    }
}