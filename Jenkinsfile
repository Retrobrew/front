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
                branch 'dev/master'
            }
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'MOLERO_SONAR_PASSWORD', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                        nodejs(nodeJSInstallationName: 'nodejs') {
                            sh "sonar-scanner -Dsonar.branch.name=${env.BRANCH_NAME} -Dsonar.login=${PASSWORD} -Dsonar.host.url=http://192.168.1.3:9000"
                        }
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
