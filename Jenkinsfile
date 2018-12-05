node {
    def git = checkout scm
    stage("Build") {
        sh "./scripts/docker_build.sh ${git.GIT_COMMIT}"
        sh "./scripts/docker_push.sh ${git.GIT_COMMIT}"
    }
    stage("Clean") {
        sh "echo 'I solemnly swear that I know not to run this without committing changes I want to keep!'"
        sh "git clean -dfxq"
        sh "git stash"
        sh "npm install --prefix game-api"
        sh "npm run eslint --prefix game-api"
    }
    stage("Test") {
        sh "npm run test:unit --prefix game-api"
    }
    build job: 'Deployment', parameters: [[$class: 'StringParameterValue', name: 'GIT_COMMIT', value: "${git.GIT_COMMIT}"]]
}