pipeline {
    agent any // O especifica una etiqueta de tu agente: agent { label 'tu-agente' }

    stages {
        stage('Checkout Repository') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // O 'yarn install' si usas Yarn
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test' // Comando para ejecutar tus pruebas de Playwright
                // O si tienes un script específico en package.json:
                // sh 'npm run test:e2e'
            }
        }
        stage('Publish Test Results') {
            steps {
                // Aquí puedes añadir pasos para publicar los resultados de tus pruebas
                // Por ejemplo, si Playwright genera un archivo de resultados JUnit:
                // junit 'playwright-report/junit.xml'
            }
        }
    }
    post {
        always {
            cleanWs() // Limpia el espacio de trabajo después de la ejecución
        }
    }
}