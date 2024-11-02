pipeline {
    agent any

    environment {
       S3_BUCKET_NAME = 'devsum-portfolio'
       S3_BUCKET_REGION = 'ap-south-1'
        AWS_ACCESS_KEY_ID = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key-id')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the static site...'
                sh 'npm install && npm run build'
            }
        }

        stage('Test AWS Credentials') {
            steps {
                script {
                    def output = sh(script: 'aws sts get-caller-identity', returnStdout: true)
                    echo "AWS Caller Identity: ${output}"
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to S3...'
                sh '''
                aws s3 sync ./build s3://$S3_BUCKET --region $AWS_REGION --delete || echo "S3 sync failed."
                '''
            }
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
