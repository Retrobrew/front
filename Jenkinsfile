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
                    sh 'npm install -g yarn'
                    sh 'npm install -g sonar-scanner'
                    sh 'yarn install'
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
                anyOf {
                    branch 'dev/master'; branch 'feat/**'; branch 'fix/**'; branch 'master'
                }
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
        stage("Build"){
            when {
                branch 'master'
            }
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    withCredentials([file(credentialsId: 'RETROBREW_VUE_PROPERTIES_PROD', variable: 'FILE')]) {
                        sh "cp \$FILE ."
                        sh 'yarn build --prod'
                    }
                }
            }
        }
        stage("Deploy to dev environment"){
            when {
                branch 'dev/master'
            }
            steps{
                withCredentials([usernamePassword(credentialsId: 'MOLERO_HEROKU_PASSWORD', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                    nodejs(nodeJSInstallationName: 'nodejs') {
                        sh('git push https://${USERNAME}:${PASSWORD}@git.heroku.com/retrobrew-dev-front.git HEAD:refs/heads/main')
                    }
                }
            }
        }
        stage("Deploy to prod environment"){
            when {
                branch 'master'
            }
            steps{
                withCredentials([usernamePassword(credentialsId: 'RETROBREW_FRONT_PROD', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                    nodejs(nodeJSInstallationName: 'nodejs'){
                        sh('sshpass -p ${PASSWORD} scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -P 22 -r dist/* ${USERNAME}@192.168.1.20:/home/prod/www/.')
                    }
                }
            }
        }
    }
}
