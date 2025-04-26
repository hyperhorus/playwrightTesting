pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.43.1-jammy'
      args '-v $WORKSPACE:/app -w /app'
    }
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
        sh 'npx playwright install --with-deps'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npx playwright test'
      }
    }
  }
}
