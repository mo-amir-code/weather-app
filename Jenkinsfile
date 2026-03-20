pipeline {
    agent any

     triggers {
        githubPush()
    }

    stages {
        stage('Trigger build job') {
            steps {
                build job: 'client-build-image',
                      wait: true
            }
        }
    }
}