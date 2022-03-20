pipeline{
    agent any

    stages{
        stage("SCM"){
            steps{
                checkout scm
            }
        }
        stage("Install"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm install yarn'
                    sh 'yarn install'
                    sh 'yarn add -D sonar-scanner'
                }
            }
        }
        stage("Test"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'yarn test'
                }
            }
        }
        stage('SonarQube Analysis') {
            when {
                not {
                    changeRequest()
                }
            }
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'nodejs') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage("Deploy"){
            environment {
                HEROKU_TOKEN = credentials('MOLERO_HEROKU')
            }
            when {
                branch 'dev/master'
            }
            steps{
                sh 'git remote add heroku https://heroku:${HEROKU_TOKEN}@git.heroku.com/retrobrew-dev-front.git'
                sh 'git fetch --all --unshallow'
                sh 'git push heroku HEAD:main -f'
            }
        }
    }
}
