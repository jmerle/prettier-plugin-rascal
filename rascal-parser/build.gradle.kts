import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
  kotlin("jvm") version "1.3.71"
  id("com.github.johnrengelman.shadow") version "5.2.0"
  id("org.jlleitschuh.gradle.ktlint") version "9.2.1"
}

group = "com.jaspervanmerle.rascalparser"
version = "1.0.0"

repositories {
  jcenter()
}

dependencies {
  implementation(kotlin("stdlib-jdk8"))
  implementation(files("lib/rascal-shell-0.17.0.jar"))
  implementation("com.github.salomonbrys.kotson:kotson:2.5.0")
}

ktlint {
  filter {
    exclude("**/generated/**")
    include("**/kotlin/**")
  }
}

tasks {
  withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "1.8"
  }

  named<ShadowJar>("shadowJar") {
    archiveClassifier.set("")
    archiveVersion.set("")
    destinationDirectory.set(file("$rootDir/../lib"))
    manifest {
      attributes(mapOf("Main-Class" to "com.jaspervanmerle.rascalparser.RascalParser"))
    }
  }
}
