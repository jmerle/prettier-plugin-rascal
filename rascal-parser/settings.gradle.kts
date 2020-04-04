plugins {
  id("com.gradle.enterprise").version("3.2.1")
}

rootProject.name = "rascal-parser"

gradleEnterprise {
  buildScan {
    termsOfServiceUrl = "https://gradle.com/terms-of-service"
    termsOfServiceAgree = "yes"
  }
}
